import express from "express";

import {
  getAllUsers,
  registerUsers,
  specialFun,
  userByID,
} from "../controllers/users.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", registerUsers);

router.get("/userId/special", specialFun);

router.get("/userId/:id", userByID);

export default router;
