import user from "../../../../../models/user";
import connectDb from "../../../../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === "GET") {
        const u = await user.find()
        res.status(200).json(u);
    }
    res.status(400).json(req)
}

export default connectDb(handler);