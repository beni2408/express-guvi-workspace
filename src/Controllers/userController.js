const users = [];

/// Create user
export const createUser = (req, res) => {
  const { name, email, password, gender } = req.body;
  if (users.find((user) => user.email === email)) {
    return res
      .status(400)
      .json({ message: "User already exists", status: "error" });
  }
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
    gender,
  };
  users.push(newUser);

  res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: newUser,
  });
};

/// read all user
export const getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Users fetched successfully",
    data: users,
  });
};

/// Read user by ID
export const getUserByID = (req, res) => {
  console.log(req.params);

  const { id } = req.params;

  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }
  res.status(200).json({
    status: "success",
    message: "User fetched successfully",
    data: user,
  });

  //req.body => safe transaction
  // req.params => data from url
  //req.query => data from url
};

/// update user by id
export const updateUserByID = (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  const userIndex = users.findIndex((user) => user.id === Number(id));
  if (userIndex === -1) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }
  const updatedUser = {
    ...users[userIndex],
    ...newData,
    id: users[userIndex].id,
  };
  users[userIndex] = updatedUser;

  res.status(200).json({
    status: "success",
    message: "User updated successfully",
    data: updatedUser,
  });
};

///Delete User by ID
export const deleteUserByID = (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === Number(id));
  if (userIndex === -1) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }
  const deletedData = users.splice(userIndex, 1);
  res.status(200).json({
    status: "success",
    message: "User deleted successfully",
    data: deletedData,
  });
};
