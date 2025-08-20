import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on('connected',()=>console.log("database Connect"))
    await mongoose.connect(`${process.env.MONGODB_URI}/mern`)
    }catch(error){
        console.log(error.message)
    }
}

export default connectDB;