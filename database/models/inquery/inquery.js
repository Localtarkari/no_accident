const mongoose = require("mongoose");
const inquerySchema = new mongoose.Schema(
  {
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
      },
    ],
    name:{
        type:String
    },
    contact: {
      type: String,
    },
    details:{
        type: String,
    },
    package_id:{
        type:String,
        unique: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquery", accelerometerSchema);
