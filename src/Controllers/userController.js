const users = [];
import UserModel from "../models/User.js";
/// Create user
export const createUser = async (req, res) => {
  const { name, email, password, gender } = req.body;

  // const newUser = {
  //   id: users.length + 1,
  //   name,
  //   email,
  //   password,
  //   gender,
  // };
  const newUser = new UserModel({
    name,
    email,
    password,
    gender,
  });

  await newUser.save(); // saves to the database // async operation

  // users.push(newUser);

  res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: newUser,
  });
};

/// read all user
export const getAllUsers = async (req, res) => {
  const allusers = await UserModel.find().select(
    "-password -__v -createdAt -updatedAt "
  );
  res.status(200).json({
    status: "success",
    message: "Users fetched successfully",
    data: allusers,
  });
};

/// Read user by ID
export const getUserByID = async (req, res) => {
  console.log(req.params);

  const { id } = req.params;

  const userbyid = await UserModel.findById(id).select(
    "-password -__v -createdAt -updatedAt "
  );
  if (!userbyid) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }
  res.status(200).json({
    status: "success",
    message: "User fetched successfully",
    data: userbyid,
  });

  //req.body => safe transaction
  // req.params => data from url
  //req.query => data from url
};

/// update user by id
export const updateUserByID = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  const updatedUser = await UserModel.findByIdAndUpdate(id, newData, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    message: "User updated successfully",
    data: updatedUser,
  });
};

///Delete User by ID
export const deleteUserByID = async (req, res) => {
  const { id } = req.params;
  const deletedData = await UserModel.findByIdAndDelete(id);

  res.status(200).json({
    status: "success",
    message: "User deleted successfully",
    data: deletedData,
  });
};
