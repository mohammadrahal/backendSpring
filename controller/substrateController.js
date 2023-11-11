const Substrate = require('../model/substrateModel')

const addSubstrate = async (req, res) => {
    try {
        const substrater = await Substrate.create({
            ...req.body,
        })
        res.status(200).json({
        success:true,
        message:'Substrater added successfully',
        data: substrater
        });
    }catch (error){
        console.error(error);
        res.status(400).json({
            success:false,
            message: 'error when adding substrater',
            error: error.message
        })
        }
}

const getSubstrate = async (req, res) => {
    try {
        const substrate = await Substrate.find({});
        res.status(200).json({
           success:true,
            message:'data retrieved successfully ',
            data:substrate,
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false ,
            message:'error while retrieved data',
            error: error.message
        })
    }
}


module.exports = {
    addSubstrate,
    getSubstrate
}