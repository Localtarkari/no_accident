const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    password: String,
    phonenumber: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    user_type: {
      type: String,
      enum: ["admin", "user","police", "guest"],
      default: "user",
    },
  },

  { timestamps: true }
);

userSchema.pre("save", function (next) {
  let user = this;
  console.log("aa    ", this.password, "  aaa");
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
  // let pass= '"'+inputPassword+'"';
  return await bcrypt.compare(inputPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
