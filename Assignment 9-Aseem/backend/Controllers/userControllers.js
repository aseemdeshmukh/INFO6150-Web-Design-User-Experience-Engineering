const e = require("express");
const asyncHandler = require("express-async-handler");
const { findByIdAndDelete, findOneAndDelete } = require("../models/userModel");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const authUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.json({ stutus: "error", user: false });
  }

  const userPassword = await bcrypt.compare(req.body.password, user.password);

  if (userPassword) {
    return res.json({ stutus: "ok", user: true });
  } else {
    return res.json({ stutus: "error", user: false });
  }
});

const editUser = asyncHandler(async (req, res) => {
  //   console.log("something happened");
  // let upid = req.params.id;
  let upname = req.body.name;
  let getEmail = req.body.email;
  let uppassword = req.body.password;
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
  let regexName = /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regexEmpty = /^$/;
  let notEmpty = false;
  if (
    upname.trim().match(regexEmpty) ||
    getEmail.trim().match(regexEmpty) ||
    uppassword.trim().match(regexEmpty)
  ) {
    res.status(400).send({
      message: "Please enter valid Full name, Username, Password",
    });
  } else {
    notEmpty = true;
  }

  if (notEmpty) {
    if (!upname.trim().match(regexName)) {
      res.status(400).send({
        message:
          "Please enter Name with atleast 3 characters without any special characters.",
      });
    }
    if (!getEmail.trim().match(regexEmail)) {
      res.status(400).send({
        message: "Please enter valid email address.",
      });
    }
    if (!uppassword.trim().match(regexPassword)) {
      res.status(400).send({
        message:
          "Please enter password that has 8-16 characters with uppercase letters, lowercase letters and at least one number",
      });
    }
    const salt = await bcrypt.genSalt(10);
    uppassword = await bcrypt.hash(uppassword, salt);
    const userUpdate = await User.findOneAndUpdate(
      { email: getEmail },
      { $set: { name: upname, password: uppassword } }
    )
      .then((data) => {
        if (data == null) {
          res.status(400).send({ message: "The User does not exist" });
        } else {
          res.status(201).send({ message: "The User is Updated" });
        }
      })
      .catch((err) => {
        res.status(400).send({ message: "The User does not exist" });
      });
  }
  //   console.log(upid, upname, uppassword);
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
  let regexName = /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regexEmpty = /^$/;
  let notEmpty = false;
  if (
    name.trim().match(regexEmpty) ||
    email.trim().match(regexEmpty) ||
    password.trim().match(regexEmpty)
  ) {
    res.status(400).send({
      message: "Please make sure to enter valid Full Name, Email and Password",
    });
  } else {
    notEmpty = true;
  }

  if (notEmpty) {
    if (!name.trim().match(regexName)) {
      res.status(400).send({
        message:
          "Full Name should have atleast 3 characters without any special characters",
      });
    } else if (!email.trim().match(regexEmail)) {
      res.status(400).send({
        message: "Email address is not valid",
      });
    } else if (!password.trim().match(regexPassword)) {
      res.status(400).send({
        message:
          "Passwords are 8-16 characters with uppercase letters, lowercase letters and at least one number",
      });
    } else {
      const userExists = await User.findOne({ email });

      if (userExists) {
        res.status(400).send({
          message: "User already exists",
        });
      }

      const user = await User.create({
        name,
        email,
        password,
      });

      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
      } else {
        res.status(400);
        throw new Error("Error Occured!!");
      }
    }
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  // let param_delemail = req.params.id;
  let delemail = req.body.email;
  // console.log(param_delemail, delemail);

  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regexEmpty = /^$/;
  let notEmpty = false;
  if (delemail.trim().match(regexEmpty)) {
    res.status(400).send({
      message: "Please make sure to enter valid Email",
    });
  } else {
    notEmpty = true;
  }

  if (notEmpty) {
    if (!delemail.trim().match(regexEmail)) {
      res.status(400).send({
        message: "Email address is not valid",
      });
    } else {
      const deleteUser = await User.findOneAndDelete({ email: delemail })
        .then((data) => {
          if (data == null) {
            res.status(400).send({ message: "User does not exist" });
          } else {
            res.status(201).send({ message: "User Deleted" });
          }
        })
        .catch((err) => {
          res.status(400).send({ message: "Something went wrong" });
        });
    }
  }
});

const getUsers = asyncHandler(async (req, res) => {
  // console.log("Something happened");
  const readUsers = await User.find()
    .then((data) => {
      if (data.length == 0) {
        res
          .status(400)
          .send({ message: "Users does not exist. Please enter users first" });
      } else {
        res.status(201).send(data);
      }
    })
    .catch((err) => {
      res.status(400).send({ message: "Something went wrong" });
    });
});
module.exports = { registerUser, editUser, deleteUser, getUsers, authUser };
