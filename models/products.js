import mongoose from "mongoose";

const Products = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    imgs: [{ type: String }],
    category: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number },
    quantity: { type: Number, required: true }
})

mongoose.models = {}

export default mongoose.model("products", Products);