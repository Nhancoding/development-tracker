const express = require("express");
const router = express.Router();
const {User,projects, contracts} = require("../models");

router.get("/",(req,res)=>{
    projects.findAll().then(projectsData=>{
        res.json(projectsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noooo",err})
    })
});

router.get("/:id",(req,res)=>{
    projects.findByPk(req.params.id,{
        include:[User, contracts]
    }).then(projectsData=>{
        res.json(projectsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"unable to grab user id",err})
    })
});

router.post("/",(req,res)=>{
    console.log(req.body)
    projects.create({
        name:req.body.name,
        description:req.body.description,
        cost:req.body.cost,
        deadline:req.body.deadline,
        
    }).then(projectsData=>{
        res.json(projectsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh crap",err})
    })
});

router.put("/id",(req,res)=>{
    projects.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(projectsData=>{
        res.json(projectsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh crap",err})
    })
});

router.delete("/id",(req,res)=>{
    projects.destroy({
        where:{
            id:req.params.id
        }
    }).then(projectsData=>{
        res.json(projectsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh crap",err})
    })
});

module.exports = router;