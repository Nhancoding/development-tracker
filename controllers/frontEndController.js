const express = require("express");
const { Projects, Contracts, User } = require("../models");
const router = express.Router();

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        return res.redirect("/")
    } else {
        res.render("login-signup")
    }
})
router.get("/", (req, res) => {
    res.render("home", {
        isLoggedIn: req.session.loggedIn,
        userId: req.session.userId,
    })
})
router.delete("/logout", (req, res) => {
    req.session.destroy();
    return res.render("home")
});

router.get("/profile", async (req, res) => {
    if (!req.session.userId) {
        return res.redirect("login")
    }
    // get userId from req.session
    const userdata = await User.findByPk(req.session.userId)
    const projectdata = await Projects.findAll({
        include: [Contracts],
        where:{
            UserId : req.session.userId
        }
    })
    const hbsContracts = projectdata.map((project) => project.toJSON());
    console.log(userdata)
    const hbsData = userdata.toJSON();
    console.log('==============================')
    console.log(hbsContracts)
    res.render("profile", {
        user: hbsData,
        projects: hbsContracts
    })

})
// use that id to query user projects 
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        return res.redirect("/")
    }
    // res.render("login-signup",{
    //     isLoggedIn:req.session.loggedIn,
    //     userId:req.session.userId,
    // })
})
// rendering the create project page
router.get("/add-project", (req, res) => {
    // if(!req.session.loggedIn){
    //     return res.redirect("/")
    // }
    console.log("/add-project",res);
    res.render("add-project", {
        isLoggedIn: req.session.loggedIn,
        userId: req.session.userId,
        //send your object w img url with res object
    })
})








module.exports = router;