const express = require("express");
const router = express.Router();
const { User, Projects, Contracts } = require("../models");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dfejwyntg",
  api_key: "371326552722734",
  api_secret: "pBazNitRhFKzVCmX1BK6cjvoyME",
});

router.get("/", (req, res) => {
  Projects.findAll({
    include: [Contracts],
  })
    .then((projectsData) => {
      res.json(projectsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "oh noooo", err });
    });
});

router.get("/:id", (req, res) => {
  Projects.findByPk(req.params.id, {
    include: [User, Contracts],
  })
    .then((projectsData) => {
      res.json(projectsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "unable to grab user id", err });
    });
});

router.post("/", async (req, res) => {
  console.log(req.body);
//   let r = "";
//   try {
//     const result = await cloudinary.v2.uploader.upload(req.body.image, {
//       folder: "development tracker",
//     });
//     console.log(result);
//     r = result;
//   } catch (error) {
//     console.log(error);
//   }
  try {
    const projectData = await Projects.create({
      name: req.body.name,
      description: req.body.description,
      deadline: req.body.deadline,
      UserId: req.session.userId,
      url:req.body.image
    });
    //   await projectData.addcontract(req.body.contractIds);

    
    res.json(projectData);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "error",
      err,
    });
  }
});
// router.post("/",async(req,res)=>{
//     Projects.create(req.body).then(projectsData=>{
//         res.json(projectsData)
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({msg:"oh craaaaap",err})
//     })
// });

router.put("/:id", (req, res) => {
  Projects.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((projectsData) => {
      res.json(projectsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "oh c", err });
    });
});

router.delete("/:id", (req, res) => {
  Projects.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((projectsData) => {
      res.json(projectsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "oh crap", err });
    });
});

module.exports = router;
