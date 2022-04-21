const mongoose = require('mongoose')

const requestPackageSchema = mongoose.Schema({
    first_name:{
        type: String,
    
    },
    last_name:{
        type:String
    },
    vehicle_number:{
        type: String
    },
    vehicle_type:{
        type: String
    },
    requested_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},
{timestamps: true}
)

module.exports = mongoose.model('PackageRequest',requestPackageSchema);