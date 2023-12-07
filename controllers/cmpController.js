const compound = require('../models/Compound');

const createCmp = async (req, res) => {
    const {name, image  , description} = req.body;
    try {
        const newCompound = await compound.create({
            name,
            image,
            description
        });
        res.status(201).json(newCompound);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getCmps = async (req, res) => {
    try {
        const compounds = await compound.findAll();
        res.status(200).json(compounds);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getOneCmp = async (req, res) => {
    try{
        const {id} = req.params;
        const compounds = await compound.findOne({
            where: {id: id}
        });
        res.status(200).json(compounds);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const updateCmp = async (req, res) => {
    try{
        const {id} = req.params;
        const {name , imgUrl , description} = req.body;
        const compounds = await compound.update({
            name,
            image: imgUrl,
            description
        }, {
            where: {id: id}
        });
        res.status(200).json(compounds);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const deleteCmp = async (req, res) => {
    try{
        const {id} = req.params;
        const compound = await compound.destroy({
            where: {id: id}
        });
        res.status(200).json(compound);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const getAllCmp = async (req, res) => {
    try{
        const { limit, page} = req.query;
        const compounds = await compound.findAll({
            offset: parseInt((page)*parseInt(limit)),
            limit: parseInt(limit),
        })

        return res.status(200).json({
            compounds
        })
    }
    catch(err){
        return res.status(500).json({
            message: err.message
        });
    }
}

module.exports = {
    createCmp,
    getCmps,
    getOneCmp,
    updateCmp,
    deleteCmp,
    getAllCmp
}


