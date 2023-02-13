const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("this is the hp")
})
const userRoutes = require("./userController");
router.use("/api/users",userRoutes);

const projectRoutes = require("./projectsController");
router.use("/api/projects",projectRoutes);


const contractRoutes = require("./contractsController");
router.use("/api/contracts",contractRoutes);

// const frontEndRoutes = require("./frontEndController");
// router.use("/",frontEndRoutes);

module.exports = router;
