import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDatabase = async () => {
    try {
         await mongoose.connect(
            `mongodb+srv://engrfarmanali44:<${process.env.MONGODB_PASS}>@cluster0.duzzv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
                connectTimeoutMS: 20000, // 20 seconds
            }
        );

        console.log("Database connected successfully");
    } catch (error) {
        console.error(`Database connection error: ${error.message}`);
        process.exit(1);
    }
};

export default connectToDatabase;