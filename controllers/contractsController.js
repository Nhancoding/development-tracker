const express = require("express");
const router = express.Router();
const {Projects,Contracts} = require("../models");

router.get("/",(req,res)=>{
    Contracts.findAll().then(contractsData=>{
        res.json(contractsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"cant get contract",err})
    })
});

router.post("/",(req,res)=>{
    console.log(req.body)
    Contracts.create({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        projectId:req.body.projectId
    }).then(contractsData=>{
        res.json(contractsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"contract id error",err})
    })
});
// 
module.exports=router;