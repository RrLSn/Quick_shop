import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      min: 6,
    },
    email: {
      type: String,
      required: true,
      max: 255,
    },
    phone: {
      type: String,
      require: true,
      min: 8,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    country: {
      type: String,
      require: false,
      min: 5,
    },
    state: {
      type: String,
      require: false,
    },
    address: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", UsersSchema);

export default Users;
