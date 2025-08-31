import mongoose from "mongoose";

export const db=()=>{
    mongoose.connect(process.env.MONGO_URL).
    then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log(err)
    })
}
