import express from 'express';
const userRouter = express.Router();


userRouter.get('/users', (req,res)=>{
    res.send("User router connected successfully")
})


export default userRouter;