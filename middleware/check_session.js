let check_sessions = (req,resp,next)=>{
   if(req.session.user){
       return resp.render('dashboard');
   } else{
       next()
   }
}

module.exports = {check_sessions};