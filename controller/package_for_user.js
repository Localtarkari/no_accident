const { request } = require('express');
const Package = require('../database/models/package/package');
const User = require('../database/models/user_management/users');


let get_package = (req,resp)=>{
    Package.find({},(data,err)=>{
        console.log(data)
        resp.send("ok ")
    })  
}


let add_package = (req,resp)=>{


User.findOne({_id:req.body.user_id}).then((data)=>{
    const pack = new Package({
        package_name:req.body.name,
        package_features: req.body.features,
        added_by: data
    })
    pack.save((err)=>{
        if(err) {
         console.log(err)           
        }
        else{
            console.log('done')
            resp.redirect('/')
        }
    })

}).then((err)=>{
      console.log(err)
  });

}

let update_package = (req,resp)=>{
   Package.findByIdAndUpdate(req.params.id,{
       package_name: req.body.name,
       package_features: req.body.features,
     }).then((data)=> resp.redirect("/"))
}

let delete_package = (req,resp)=>{

}




module.exports = {get_package,add_package,update_package}