const moveModel = require('../models/moves.model');
const express = require('express');
let router = express.Router();

router.get("/moves", (req, res) => {
    moveModel.find({
        "Id_Cuenta": req.body.Id_Cuenta
    })
    .then(doc =>{
        if (!doc || doc.length === 0){
            res.status(404).send("No hay movimientos");
        }

        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;