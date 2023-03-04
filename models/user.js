import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
})

export default mongoose.model("Users", User);