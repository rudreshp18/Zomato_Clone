const express = require("express");
const { users } = require("../data/users.json");
const { UserModel, BookModel } = require("../models");
const {
  getAllUsers,
  getSingleUserById,
  deleteUser,
  updateUserById,
  createNewUser,
  getSubscriptionDetailsById,
} = require("../controllers/user-controller");

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getSingleUserById);

router.post("/", createNewUser);

router.put("/:id", updateUserById);

router.delete("/:id", deleteUser);

router.get("/subscription-details/:id", getSubscriptionDetailsById);

module.exports = router;
