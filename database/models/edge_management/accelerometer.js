const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const accelerometerSchema = new mongoose.Schema(
  {
    vehicle: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
      },
    ],
    acceleration_x: String,
    acceleration_y: String,
    acceleration_z: String,
    time_stamp: {
      type: Date,
      default: Date.now,
    },
    device_id:{
        type:String,
        unique: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Accelerometer", accelerometerSchema);
