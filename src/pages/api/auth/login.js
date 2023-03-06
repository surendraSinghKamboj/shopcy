import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../../../../models/user";
import connectDb from "../../../../middleware/mongoose";


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

            const token = jwt.sign({ id: existingUser._id, userName: existingUser.userName }, process.env.JWT_SECRET, { expiresIn: "2d" });
            return res.status(200).json({ message: "Login successful", token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else if (req.method === "GET") {
        console.log("verifying token")
        const token = req.headers.authorization;
        console.log(token)
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (decoded.userName) {
                const temp = decoded.userName;
                const existingUser = await user.findOne({ userName: temp });

                if (!existingUser) {
                    return res.status(401).json({ message: "you are not authorized" });
                }
                return res.status(200).json({ message: "Auth Successfull" });
            }
        } catch (error) {
            res.status(400).json({ message: "Bad Request. Please try again." })
        }
    }

    else {
        res.status(400).json({ message: "Bad Request. Please try again." });
    }
};

export default connectDb(handler);
