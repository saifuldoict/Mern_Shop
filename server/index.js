import express from "express";
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";



// app config
const port= process.env.PORT || 3000;
const app = express();

await connectDB();

// Allowed Multiple Origin
const allowedOrigins= ['http://localhost:5173']

// api endpoint
app.get('/', (req, res) => {
    res.send('Database connected now!')
})

app.use('/api/user',userRouter)
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})