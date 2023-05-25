import { userModel } from "../models/users.js";

export const getAllUsers = async (req, res) => {
  const users = await userModel.find({});

  const keyword = req.query.keyword;

  console.log(keyword);

  res.json({
    success: true,
    users,
  });
};

export const registerUsers = async (req, res) => {
  const { name, email, password } = req.body;

  await userModel.create({
    name,
    email,
    password,
  });

  res.status(201).cookie("temp", { name, email, password }).json({
    success: true,
    message: "User created successfully",
  });
};

export const specialFun = (req, res) => {
  res.json({
    success: true,
    message: "OO YEAH",
  });
};

export const userByID = async (req, res) => {
  // const { id } = req.body;
  const { id } = req.params;
  // console.log(req.params);
  const users = await userModel.findById(id);
  res.json({
    success: true,
    users,
  });
};
