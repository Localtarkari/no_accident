const mongoose = require('mongoose')

const packageSchema = mongoose.Schema({
    package_name:{
        type: String,
    
    },
    package_description:{
        type: String
    },
    package_features:[{
        type: String,
        
    }],
    added_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},
{timestamps: true}
)

module.exports = mongoose.model('Package',packageSchema);