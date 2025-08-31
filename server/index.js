import express from "express";
import dotenv from "dotenv";
import {db}from "./config/db.js";
import cors from "cors";

dotenv.config();

const app=express();
const port=process.env.PORT||8000

app.use(express.json());
app.use(cors({
  
    origin:"*",
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  exposedHeaders: ["Content-Length", "X-Custom-Header"], 
  credentials: true,
}))

app.use(express.urlencoded({extended:true}))




db();


app.listen(port,()=>{
    console.log(`Server Running at port ${port}`)
})