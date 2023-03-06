import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../../../../models/user";
import connectDb from "../../../../middleware/mongoose";

const JWT_SECRET = process.env.JWT_SECRET;

const withAuth = (handler) => async (req, res) => {
    try {
        // Get token from request headers
        const token = req.headers.authorization;
        console.log(token);
        if (!token) {
            return res.status(401).json({ message: "Unauthorized from try" });
        }

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded);
        req.user = decoded.id;

        // Call the original handler with the authenticated request and response
        await handler(req, res);
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: "Unauthorized from catch" });
    }
};

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { userName, password } = req.body;

            const existingUser = await user.findOne({ userName });

            if (!existingUser) {
                return res.status(401).json({ message: "Invalid username or password" });
            }

            const passwordMatch = await bcrypt.compare(password, existingUser.password);

            if (!passwordMatch) {
                return res.status(401).json({ message: "Invalid username or password" });
            }

            const token = jwt.sign({ id: existingUser._id }, JWT_SECRET);
            return res.status(200).json({ message: "Login successful", token });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        return res.status(400).json({ message: "Bad Request. Please try again." });
    }
};

export default connectDb(withAuth(handler));
