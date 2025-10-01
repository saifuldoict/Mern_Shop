import express from 'express';
import { adminLogin, getUsers, removeUser, updateUser, userLogin, userRegister } from '../controllers/userController.js';
const userRouter = express.Router();


userRouter.post("/register", userRegister);
userRouter.post('/login', userLogin);
userRouter.get('/users', getUsers);
userRouter.put('/update/:id', updateUser);
userRouter.post("/remove", removeUser);
userRouter.post("/admin", adminLogin);



export default userRouter;