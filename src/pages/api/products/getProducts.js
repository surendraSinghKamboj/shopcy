import products from "../../../../models/products";
import connectDb from "../../../../middleware/mongoose";

const handler = async (req, res) => {
    let productList = await products.find()
    res.status(200).json({ productList });
}

export default connectDb(handler);