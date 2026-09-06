import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";



const createToken = (user) => {

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET missing");
  }


  return jwt.sign(
    {
      id: user._id.toString(),
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

};



const cookieOptions = {

  httpOnly: true,

  secure:
    process.env.NODE_ENV === "production",

  sameSite: "lax",

  maxAge:
    7 * 24 * 60 * 60 * 1000,

};



const safeUser = (user) => ({

  id: user._id,

  name: user.name,

  email: user.email,

  role: user.role,

  avatar: user.avatar,

});





export const register = async (req,res)=>{

try{


const name =
String(req.body.name || "").trim();


const email =
String(req.body.email || "")
.toLowerCase()
.trim();


const password =
String(req.body.password || "");



if(!name || !email || !password){

return res.status(400).json({

success:false,

message:"All fields are required"

});

}



if(!validator.isEmail(email)){

return res.status(400).json({

success:false,

message:"Invalid email"

});

}



if(password.length < 8){

return res.status(400).json({

success:false,

message:"Password too short"

});

}



const exists =
await User.findOne({email});


if(exists){

return res.status(409).json({

success:false,

message:"Account already exists"

});

}



const hashed =
await bcrypt.hash(password,12);



const user =
await User.create({

name,

email,

password:hashed,

provider:"credentials"

});



const token =
createToken(user);



res.cookie(
"anox_token",
token,
cookieOptions
);



return res.status(201).json({

success:true,

message:"Account created",

user:safeUser(user)

});



}catch(error){

console.error(error);


return res.status(500).json({

success:false,

message:"Server error"

});


}

};





export const login = async(req,res)=>{


try{


const email =
String(req.body.email || "")
.toLowerCase()
.trim();


const password =
String(req.body.password || "");



const user =
await User.findOne({email})
.select("+password");



if(!user){

return res.status(401).json({

success:false,

message:"Invalid credentials"

});

}



const match =
await bcrypt.compare(
password,
user.password
);



if(!match){

return res.status(401).json({

success:false,

message:"Invalid credentials"

});

}



user.lastLogin = new Date();

await user.save();



const token =
createToken(user);



res.cookie(
"anox_token",
token,
cookieOptions
);



return res.json({

success:true,

message:"Login successful",

user:safeUser(user)

});



}catch(error){

console.error(error);


return res.status(500).json({

success:false,

message:"Server error"

});

}


};





export const logout = async(req,res)=>{


res.clearCookie(
"anox_token",
{
httpOnly:true,
sameSite:"lax",
secure:
process.env.NODE_ENV==="production"
}
);



return res.json({

success:true,

message:"Logged out"

});


};