import mongoose from "mongoose";


const connectDb = (handler) => async (req, res) => {
    try {
        if (mongoose.connections[0].readyState) {
            return handler(req, res)
        }
        if (!process.env.MONGODB_URI) {
            console.error("URI Not found")
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.info("Online Database connected Successfully...........")
    } catch (error) {
        console.error("Failed to connecting online Database Plaese Check your Internet Connection.....", error);
    } finally {
        await mongoose.connect(process.env.LOCAL_MONGODB_URI);
        console.info("local Database connected..............")
    }

}

export default connectDb;
