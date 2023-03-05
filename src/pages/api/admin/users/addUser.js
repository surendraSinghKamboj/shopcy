import bcrypt from "bcrypt";
import Admin from "../../../../../models/adminUsers";
import connectDb from "../../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const salt = await bcrypt.genSalt(10);

            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            let u = new Admin({
                name: req.body.name,
                userName: req.body.userName,
                email: req.body.email,
                mobile: req.body.mobile,
                password: hashedPassword,
            });
            await u.save();

            res.status(200).json({
                message: `Congratulations ${req.body.name}! Your account has been created successfully.`,
                status: "success"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(400).json({ message: "Bad Request. Please try again." });
    }
}

export default connectDb(handler);