const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.send('Response from login path')
})

router.get('/logout', (req, res) => {
    res.send('Response from logout path')
})

router.get('/recovery', (req, res) => {
    res.send('Response from recovery path')
})

router.get('/', (req, res) => {
    res.send('Response from root path')
})

module.exports = router