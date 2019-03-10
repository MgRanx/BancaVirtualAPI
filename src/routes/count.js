const countModel = require('../models/count.model');
const express = require('express');
let router = express.Router();

router.get("/counts", (req, res) => {
    countModel.find({
        "Id_Cliente": req.body.Id_Cliente
    })
    .then(doc =>{
        if (!doc || doc.length === 0){
            res.status(404).send("La cuenta no existe");
        }

        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;