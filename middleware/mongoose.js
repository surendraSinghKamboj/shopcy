import mongoose from "mongoose";



const connectDb = (handler) => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    await mongoose.connect("mongodb+srv://vercel-admin-user:Java@8164@cluster0.8doc4qh.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database connected Successfully....")
}

export default connectDb;
