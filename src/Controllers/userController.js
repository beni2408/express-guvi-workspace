const users = [];
import UserModel from "../models/User.js";
/// Create user
export const createUser = async (req, res) => {
  try {
    const { name, email, password, gender } = req.body;

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
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User not found",
    });
  }
};

/// read all user
export const getAllUsers = async (req, res) => {
  try {
    const allusers = await UserModel.find().select(
      "-password -__v -createdAt -updatedAt "
    );
    res.status(200).json({
      status: "success",
      message: "Users fetched successfully",
      data: allusers,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User not found",
    });
  }
};

/// Read user by ID
export const getUserByID = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User not found",
    });
  }
};

/// update user by id
export const updateUserByID = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User not found",
    });
  }
};

///Delete User by ID
export const deleteUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await UserModel.findByIdAndDelete(id);

    res.status(200).json({
      status: "success",
      message: "User deleted successfully",
      data: deletedData,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User not found",
    });
  }
};
