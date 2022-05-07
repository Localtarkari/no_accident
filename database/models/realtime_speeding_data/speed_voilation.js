const mongoose = require("mongoose");
const speedVoilationSchema = new mongoose.Schema(
  {
    vehicle: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
      },
    ],
    speed:{
        type:String
    },
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

module.exports = mongoose.model("SpeedVoilation", speedVoilationSchema);
