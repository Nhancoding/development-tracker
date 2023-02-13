const router = require("express").Router()

const homeRoutes = require("./homeRoutes")

router.use('/', homeRoutes)

router.use((req, res) => {
    res.status(404).end()
})

module.exports = router