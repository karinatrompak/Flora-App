import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://karinatrompak:I3b4XZsImjX9Lhwi@cluster0.dycbytm.mongodb.net/flora').then(()=>console.log("DB conectada"));
}