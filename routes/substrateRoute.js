const express = require('express')
const router = express.Router();

const{
    addSubstrate,
    getSubstrate
} = require('../controller/substrateController')


router.post('/addsubstrate', addSubstrate)
router.get('/getsubstrate', getSubstrate)

module.exports = router