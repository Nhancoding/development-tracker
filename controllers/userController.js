const express = require("express");
const router = express.Router();
const {User,projects,contracts} = require("../models");

router.get("/",(req,res)=>{
    User.findAll().then(userData=>{
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
      const contractData = await contracts.create({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost
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