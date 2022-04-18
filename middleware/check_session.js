let check_sessions = (req,resp,next)=>{
   if(req.session.user){
       console.log(req.session.user)
       return resp.render('dashboard',{user:req.session.user});
   } else{
       next()
   }

}

module.exports = {check_sessions};