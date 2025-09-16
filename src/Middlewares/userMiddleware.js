export const verifyUserByID = (req, res, next) => {
  const { id } = req.params;
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID",
    });
  }
  next();
};
