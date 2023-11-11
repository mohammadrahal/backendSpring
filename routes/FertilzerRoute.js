const express = require('express')
const router = express.Router();

const{
    addFertilzer,
    getFertilzer,
    updateFertilzer,
    deleteFertilzer
} = require('../controller/fertilzerController')

router.post('/addfertilzer', addFertilzer)
router.get('/getfertilzer', getFertilzer)
router.put('/updatefertilzer/:ID', updateFertilzer )
router.delete('/deletefertilzer/:id', deleteFertilzer)
module.exports = router;