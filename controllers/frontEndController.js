const express = require("express");
const router = express.Router();

router.get("/login",(req,res)=>{
    if(req.session.loggedIn){
        return res.redirect("/")
    }
    res.render("login",{
        isLoggedIn:req.session.loggedIn,
        userId:req.session.userId,
    })
})



module.exports=router;