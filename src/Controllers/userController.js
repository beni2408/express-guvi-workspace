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

export const getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Users fetched successfully",
    data: users,
  });
};

/// read all user
/// Read user by update
/// update user by id
///Delete User by ID
