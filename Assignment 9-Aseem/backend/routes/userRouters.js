const express = require("express");
const {
  registerUser,
  editUser,
  deleteUser,
  getUsers,
  authUser,
} = require("../Controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/").put(editUser);
router.route("/").delete(deleteUser);
router.route("/").get(getUsers);

module.exports = router;
