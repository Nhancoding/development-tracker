const express = require("express");
const router = express.Router();

const userRoutes = require("./userController");
router.use("/api/users",userRoutes);

const projectRoutes = require("./projectsController");
router.use("/api/projects",projectRoutes);

module.exports = router