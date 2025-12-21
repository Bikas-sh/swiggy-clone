import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bsau6629:8597754258@cluster0.mwdpv3e.mongodb.net/swiggy').then(()=>console.log("MongoDB connected"));
}