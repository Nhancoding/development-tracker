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

router.get("/:id",(req,res)=>{
    contracts.findByPk(req.params.id,{
        include:[projects]
    }).then(contractsData=>{
        res.json(contractsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"unable to grab project id",err})
    })
});


router.post("/",(req,res)=>{
    console.log(req.body)
    contracts.create({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost
        
    }).then(contractsData=>{
        res.json(contractsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"contract id error",err})
    })
});

router.put("/:id",(req,res)=>{
    contracts.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(contractsData=>{
        res.json(contractsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh crap could not update",err})
    })
});

router.delete("/:id",(req,res)=>{
    contracts.destroy({
        where:{
            id:req.params.id
        }
    }).then(contractsData=>{
        res.json(contractsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"delete error",err})
    })
});

module.exports=router;

