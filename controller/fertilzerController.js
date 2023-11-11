const Fertilzer = require('../model/fertilzerModel')

// add items 
const addFertilzer = async(req, res) =>{
try {
    const fertilzer = await Fertilzer.create({
        ...req.body,
    })
    res.status(200).json({
        success: true,
        message: 'Fertilzer added successfully',
        data: fertilzer,
    });
} catch (error) {
    console.error(error);
    res.status(400).json({
        success:false,
        message: 'error when adding fertilzer',
        error: error.message
    })
}
}

// to get the items data
const getFertilzer = async (req, res) =>{
    try {
        const fertilzer = await Fertilzer.find({});
        res.status(200).json({
            success:true,
            message:'data retrieved successfully',
            data:fertilzer
        })
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:'data not retrieved',
            error: error.message
        })
        
    }
}

// update

const updateFertilzer = async (req, res) => {
    try {
        //  const fertilzer = await Fertilzer.findByIdAndUpdate(req.params.ID, req.body);
        const fertilzer = await Fertilzer.findByIdAndUpdate(req.params.ID, req.body);

        if (!fertilzer) {
            return res.status(404).json({
                success: false,
                message: 'Fertilzer not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Update successful',
            data: fertilzer,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to update fertilzer',
            error: error.message,
        });
    }
};

// delete
const deleteFertilzer  = async (req, res) => {
    try {
      const fertilzer = await Fertilzer.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'fertilzer deleted successfully',
        data:fertilzer
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error occured while deleting the fertilzer',
        error: error,
      });
    }
  };


module.exports = {
    addFertilzer,
    getFertilzer, 
    updateFertilzer,
    deleteFertilzer
}