const express = require("express");
const { Projects, User} = require("../models");
const router = express.Router();

router.get("/login",(req,res)=>{
    if(req.session.loggedIn){
        return res.redirect("/")
    }
    res.render("login-signup",{
        isLoggedIn:req.session.loggedIn,
        userId:req.session.userId,
    })
    // res.render("login-signup")
})
router.get("/",(req,res)=>{
    res.render("home",{
        isLoggedIn:req.session.loggedIn,
        userId:req.session.userId,
    })
})

   
router.get("/profile",(req,res)=>{
        if(!req.session.userId){
            return res.redirect("/login")
        } 
        // get userId from req.session
        User.findByPk(req.session.userId,{
            include:[Projects]
        }).then(userdata=>{
            console.log(userdata)
            const hbsData = userdata.toJSON();
            console.log('==============================')
            console.log(hbsData)
            res.render("profile",hbsData)
        })
        // res.redirect("/sessions")
    })
    // use that id to query user projects 
router.get("/login",(req,res)=>{
        if(req.session.loggedIn){
            return res.redirect("/")
        }
        res.render("login-signup",{
            isLoggedIn:req.session.loggedIn,
            userId:req.session.userId,
        })
    })
    // rendering the create project page
router.get("/add-project",(req,res)=>{
        if(req.session.loggedIn){
            return res.redirect("/")
        }
        res.render("add-project",{
            isLoggedIn:req.session.loggedIn,
            userId:req.session.userId,
        })
    })








module.exports=router;