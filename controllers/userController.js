const express = require("express");
const router = express.Router();
const {User,Projects,Contracts} = require("../models");
const bcrypt = require("bcrypt");


router.get("/",(req,res)=>{
    User.findAll().then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noooo",err})
    })
});
// login route
router.post("/login",(req,res)=>{
    User.findOne({
    where:{
     email:req.body.email
    }
    }).then(userData=>{
     if(!userData){
         return res.status(401).json({msg:"incorrect email or password"})
     } else {
         if(bcrypt.compareSync(req.body.password,userData.password)){
             req.session.userId = userData.id;
             req.session.userEmail = userData.email;
             return res.json(userData)
         } else {
             return res.status(401).json({msg:"incorrect email or password"})
         }
     }
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:"oh noes!",err})
    })
 })
 

//find user
router.get("/:id",(req,res)=>{
    User.findByPk(req.params.id,{
        include:[Projects]
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
        name:req.body.name,
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



// create project protect
router.post("/user/project", async (req, res) => {
    try {
      const projectData = await User.create({
        name: req.body.name,
        description: req.body.description,
        deadline:req.body.deadline
      });
      await projectData.addcontract(req.body.contractIds);
    
      req.session.loggedIn = true;
      res.json(projectData);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        msg: "error",
        err,
      });
    }
  });

// create contract protect
router.post("/contracts", async (req, res) => {
    try {
      const contractData = await Contracts.create({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        // projectId:req.body.projectId
      });
      req.session.loggedIn = true;
      res.json(contractData);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        msg: "error",
        err,
      });
    }
  });

  module.exports = router;