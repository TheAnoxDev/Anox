import mongoose from "mongoose";


const userSchema = new mongoose.Schema(

  {

    name: {

      type: String,

      required: true,

      trim: true,

      minlength: 2,

      maxlength: 50,

    },



    email: {

      type: String,

      required: true,

      unique: true,

      lowercase: true,

      trim: true,

      index: true,

    },



    password: {

      type: String,

      default: null,

      minlength: 8,

      select: false,

    },



    provider: {

      type: String,

      enum: [
        "credentials",
        "google",
        "github",
      ],

      default: "credentials",

    },



    providerId: {

      type: String,

      default: null,

    },



    avatar: {

      type: String,

      default: "",

    },



    role: {

      type: String,

      enum: [
        "user",
        "admin",
      ],

      default: "user",

    },



    isVerified: {

      type: Boolean,

      default: false,

    },



    lastLogin: {

      type: Date,

      default: null,

    },


  },


  {

    timestamps: true,

  }

);





export default mongoose.models.User ||
mongoose.model(
  "User",
  userSchema
);