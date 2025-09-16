import { Router } from "express";
import { createUser, getAllUsers } from "../Controllers/userController.js";

const userRouter = Router();
userRouter.use((req, res, next) => {
  console.log("UserRouter Middleware");
  console.log(req.method, req.url, new Date().toLocaleString());
  next();
});

// create user

userRouter.post("/", createUser); //POST http://localhost:8000//api/users/

//Read all users
userRouter.get("/", getAllUsers);

// get user by ID
// userRouter.get(":id", getUserByID);

export default userRouter;
