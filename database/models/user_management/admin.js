const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const adminSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    phonenumber: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  let user = this;
  bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      user.password = hash;
      next();
    })
    .catch((err) => {
      console.log("error");
      next(err);
    });
});
userSchema.methods.validation = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

module.exports = mongoose.model("Admin", adminchema);
