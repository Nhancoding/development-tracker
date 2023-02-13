const express = require("express");
const router = express.Router();
const {User,projects} = require("../models");

router.get("/",(req,res)=>{
    User.findAll({
        include:[projects]
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noooo",err})
    })
});

//find user
router.get("/:id",(req,res)=>{
    User.findByPk(req.params.id,{
        include:[projects]
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"unable to grab user id",err})
    })
});



//create user
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
});

router.put("/:id",(req,res)=>{
    User.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(UserData=>{
        res.json(UserData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error could not update user",err})
    })
});

router.delete("/:id",(req,res)=>{
    User.destroy({
        where:{
            id:req.params.id
        }
    }).then(UserData=>{
        res.json(UserData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh no error could not delete",err})
    })
});

module.exports = router;