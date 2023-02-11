const express = require("express");
const router = express.Router();
const {projects,contracts} = require("../models");

router.get("/",(req,res)=>{
    contracts.findAll().then(contractsData=>{
        res.json(contractsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"cant get contract",err})
    })
});

router.post("/",(req,res)=>{
    console.log(req.body)
    contracts.create({
        jobdescription:req.body.jobdescription,
        project_id:req.body.project_id
    }).then(contractsData=>{
        res.json(contractsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"contract id error",err})
    })
});

module.exports=router;