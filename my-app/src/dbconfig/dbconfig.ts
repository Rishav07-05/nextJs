import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string);
        const connection = mongoose.connection;
        connection.on('Connected', () => {
            console.log("Connected to MongoDB");
        })
        connection.on('error', (error) => {
            console.error("Error connecting to MongoDB:", error);
            process.exit();
        })

    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
};