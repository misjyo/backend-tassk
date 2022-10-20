const jwt = require("jsonwebtoken");
const userdb = require("../models/userSchema");
const keysecret = "absdrfthgyfiujhytgfrcfdesrftgyhu";

// const authenticate = async(req,res,next)=>{

//     try {
//         const token = req.headers.authorization;
//         // console.log(token);

//         const verifytoken = jwt.verify(token,keysecret);
//         // console.log(verifytoken);

//         const rootUser = await userdb.findOne({_id:verifytoken._id});
//         console.log(rootUser)

//         if(!rootUser) {throw new Error("user not found")}

//         req.token = token
//         req.rootUser = rootUser
//         req.userId = rootUser._id

//         next();

//     } catch (error) {
//         res.status(401).json({status:401,message:"Unauthorized no token provide"})
//     }
// }

// module.exports = authenticate

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("token");
    console.log("first", token);
    const verify = jwt.verify(token, "asdfghjklqwertyu");
    if (!verify) {
      return res.send({ status: 401, Response: "token not match" });
    }
    // req.user = user;
    return next();
  } catch (err) {
    res.json({ Error: err.message });
  }
};

module.exports = authenticate;
