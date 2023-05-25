import express from "express";

import {
  deleteUsers,
  getAllUsers,
  registerUsers,
  specialFun,
  updateUsers,
  userByID,
} from "../controllers/users.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", registerUsers);

router.get("/userId/special", specialFun);

// router.get("/userId/:id", userByID);

// router.put("/userId/:id", updateUsers);

// router.delete("/userId/:id", deleteUsers);

router.route("/userId/:id").get(userByID).put(updateUsers).delete(deleteUsers);

export default router;
