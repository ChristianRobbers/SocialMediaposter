const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
  // Name field
  name: {
    type: String,
    required: [true, 'Please provide a name']
  },
  // Email field
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  // Password field
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
  // Company field
  company: {
    type: String,
    required: [true, 'Please provide a company name']
  },
  // Store field
  store: {
    type: String,
    required: [true, 'PLease provide a store']
  },
  // Role
  role: {
    type: String,
    required: [true, 'Please provide a Role'],
    enum: ['admin', 'user']
  }

  //IMG TO DO


}, {timestamps: true});

// export UserSchema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);