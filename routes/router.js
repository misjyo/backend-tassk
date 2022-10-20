const express = require("express");
const router = new express.Router();
const { register, login } = require("../controller/admin.controller");
// for user registration

router.post("/register", register);

// user Login

router.post("/login", login);
// user valid
// router.get("/validuser", authenticate, async (req, res) => {
//   // console.log("done");
//   try {
//     const ValidUserOne = await userdb.findOne({ _id: req.userId });
//     console.log(ValidUserOne);
//     res.status(201).json({ status: 201, ValidUserOne });
//   } catch (error) {
//     res.status(401).json({ status: 401, error });
//   }
// });

// user logout

// router.get("/logout",
module.exports = router;
