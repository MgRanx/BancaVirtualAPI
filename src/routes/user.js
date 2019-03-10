const UserModel = require('../models/user.model');
const Express = require('express');
let router = Express.Router();

router.post('/user', (request, response) =>{
    // access to request.body
    if(request.body.constructor == Object && Object.keys(request.body).length === 0) {
        return response.status(404).send('Request body is missing')
    }

    UserModel.findOne({
        "Username": request.body.Username,
        "Password": request.body.Password
    })
    .then(document => {
        if (!document || document.length === 0){
            return response.status(404).json("El usuario no existe");
        }
        response.status(200).send(document);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;