const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const vehicleSchema = new mongoose.Schema(
  {
    owner: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    vehicle_type: {
      type: String,
      enum: ["2 wheeler", "4 wheeler", "6 wheeler", "others"],
    },
    vehicle_number: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
