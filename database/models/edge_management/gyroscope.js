const mongoose = require("mongoose");
const gyroscopeSchema = new mongoose.Schema(
  {
    vehicle: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
      },
    ],
    gyroscope_x: String,
    gyroscope_y: String,
    gyroscope_z: String,
    device_id: {
      type: String,
    },
    time_stamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gyroscope", gyroscopeSchema);
