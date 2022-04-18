let check_access_sessions = (req,resp,next)=>{
    if(req.session.user){
        next() 
    } else{
        return resp.redirect('/');
      
    }
 
}
 
 module.exports = {check_access_sessions};