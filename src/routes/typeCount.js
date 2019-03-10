const countModel = require('../models/typeCount.model');
const express = require('express');
let router = express.Router();

router.get("/typeCount", (req, res) => {
    countModel.find({
        "_id": req.body._id
    })
    .then(doc =>{
        if (!doc || doc.length === 0){
            res.status(404).send("No existe este tipo de cuenta");
        }

        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;