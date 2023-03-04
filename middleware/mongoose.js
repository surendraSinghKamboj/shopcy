import mongoose from "mongoose";



const connectDb = (handler) => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    if(!process.env.MONGODB_URI){
        console.error("URI Not found")
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected Successfully....")
}

export default connectDb;