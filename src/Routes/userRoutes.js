import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
} from "../Controllers/userController.js";
import { verifyUserByID } from "../Middlewares/userMiddleware.js";

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
userRouter.get("/:id", verifyUserByID, getUserByID);

// update user by ID
userRouter.put("/:id", verifyUserByID, updateUserByID);

//delete user by Id
userRouter.delete("/:id", verifyUserByID, deleteUserByID);
export default userRouter;
