import express from "express";
import userRouter from "./src/Routes/userRoutes.js";
import connectDB from "./src/Config/db.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
  connectDB();
});
