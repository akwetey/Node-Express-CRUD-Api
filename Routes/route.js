const express = require("express");
const uuid = require("uuid");
const User = require("../Models/users");
const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

// Get one user
router.get("/:id", (req, res) => {});

// Create one user
router.post("/", async (req, res) => {
  const { firstname, lastname, age, address, phonenumber } = req.body;
  const user = new User({
    uuid: uuid.v4(),
    firstname: firstname,
    lastname: lastname,
    age: age,
    address: address,
    phonenumber: phonenumber
  });
  try {
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one user
router.patch("/:id", (req, res) => {});

// Delete one user
router.delete("/:id", (req, res) => {});

module.exports = router;
