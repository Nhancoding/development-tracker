const express = require("express");
const router = express.Router();
const {User,projects} = require("../models");

router.get("/",(req,res)=>{
    projects.findAll().then(projectsData=>{
        res.json(projectsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noooo",err})
    })
})
router.post("/",(req,res)=>{
    console.log(req.body)
    projects.create({
        projects:req.body.projects,
        UserId:req.body.UserId
    }).then(projectsData=>{
        res.json(projectsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh crap",err})
    })
})

module.exports = router;