import mongoose from "mongoose";
const mangodbURI =
  "mongodb+srv://jascarbenish_db_user:HhKNJjhmaQoE7PfV@democluster.vhfgyzs.mongodb.net/SampleDB?retryWrites=true&w=majority&appName=Democluster";

export const connectDB = () => {
  // Database connection logic is here
  mongoose
    .connect(mangodbURI)
    .then(() => {
      console.log("MongoDB conected");
    })
    .catch((err) => {
      console.log(err);
    });

  // another method instead of promise(then and catch)
  //   const db = mongoose.connection;
  //   db.on("error", console.error.bind(console, "MongoDB connection error:"));
  //   db.once("open", () => {
  //     console.log("Connected to MongoDB database");
  //   });
};

export default connectDB;
