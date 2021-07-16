 const router = require('express').Router()

// begins with /api

router.get('/test', (req,res) => {
    res.send('<h1>TEST</h1>')
})

 module.exports = router;