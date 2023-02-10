const express = require("express");
const router = express.Router();
const {User,projects} = require("../models");

router.get("/",(req,res)=>{
    User.findAll().then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noooo",err})
    })
})
router.post("/",(req,res)=>{
    console.log(req.body)
    User.create({
        email:req.body.email,
        password:req.body.password
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh crap",err})
    })
})

module.exports = router;