import {
  Schema,
  models,
  model,
} from "mongoose";


const UserSchema = new Schema(


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

    },



    password: {

      type: String,

      default: null,

      minlength: 8,

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





export default models.User || model(
  "User",
  UserSchema
);