import mongoose from "mongoose";

export const verifyMongooseID = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID",
    });
  }
  next();
};
