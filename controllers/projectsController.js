const express = require("express");
const router = express.Router();
const {User,projects,contracts} = require("../models");
const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: "dfejwyntg",
    api_key: "371326552722734",
    api_secret: "pBazNitRhFKzVCmX1BK6cjvoyME"
});

router.get("/",(req,res)=>{
    projects.findAll({
        include:[contracts]
    }).then(projectsData=>{
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

router.post("/",async(req,res)=>{
    console.log(req.body)
    let r = ""
    try {
        const result = await cloudinary.v2.uploader.upload(req.body.image,{
        folder: "development tracker"
    })
    console.log(result);
    r = result
    } catch (error) {
        console.log(error);
    }
    
    projects.create({
        name:req.body.name,
        cost:req.body.cost,
        deadline:req.body.deadline,
        status:req.body.status,
        UserId:req.body.UserId,
        public_id:r.public_id,
        url:r.secure_url

    }).then(projectsData=>{
        res.json(projectsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh crap",err})
    })
});

router.put("/:id",(req,res)=>{
    projects.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(projectsData=>{
        res.json(projectsData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh c",err})
    })
});

router.delete("/:id",(req,res)=>{
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