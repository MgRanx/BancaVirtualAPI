const movesModel = require('../models/typeMove.model');
const express = require('express');
let router = express.Router();

router.get("/typemoves", (req, res) => {
    movesModel.find({})
    .then(doc =>{
        if (!doc || doc.length === -1){
            res.status(404).json("No hay tipo de movimientos");
        }

        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;