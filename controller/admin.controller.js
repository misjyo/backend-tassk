const Admin = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let register = async (req, res) => {
  const { fname, email, password, cpassword } = req.body;

  if (!fname || !email || !password || !cpassword) {
    res.status(422).json({ error: "fill all the details" });
  }
  if (password !== cpassword) {
    res.status(422).json({ error: "Password not match" });
  }

  try {
    const findUser = await Admin.findOne({ email });

    if (findUser) {
      res.status(422).json({ error: "This Email is Already Exist" });
    }
    const salt = await bcrypt.genSalt(8);
    const pass = await bcrypt.hash(password, salt);
    const data = { fname, email, password: pass };

    const user = await Admin.create(data);

    // console.log(storeData);
    res.status(201).json({ status: 201, user });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: "fill all the details" });
    }
    const userValid = await Admin.findOne({ email });

    if (userValid) {
      const isMatch = await bcrypt.compare(password, userValid.password);
      console.log("first", isMatch);
      if (!isMatch) {
        return res.status(422).json({ error: "invalid details" });
      }
      console.log("first", userValid);
      const Id = await userValid._id;
      const token = await jwt.sign({ Id }, "asdfghjklqwertyu");
      console.log("first", token);

      res.status(201).json({ status: 201, user: userValid, token: token });
    }
  } catch (error) {
    res.status(401).json(error);
    console.log("catch block");
  }
};

// const logout = async (req, res) => {
//   try {
//     // req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
//     //   return curelem.token !== req.token;
//     // });

//     res.clearCookie("usercookie", { path: "/" });

//     req.rootUser.save();

//     res.status(201).json({ status: 201 });
//   } catch (error) {
//     res.status(401).json({ status: 401, error });
//   }
// };

module.exports = { register, login };
