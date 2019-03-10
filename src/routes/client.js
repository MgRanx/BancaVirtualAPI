const clientModel = require('../models/client.model');
const express = require('express');
let router = express.Router();

router.get("/client", (req, res) => {
    clientModel.findOne({
        "_id": req.body.Id_Cliente
    })
    .then(doc =>{
        if (!doc || doc.length === 0){
            res.status(404).send("El cliente no existe");
        }

        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;