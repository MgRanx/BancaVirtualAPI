const Mongoose = require('mongoose');
const SERVER = "dbcluster-fghie.mongodb.net";
const USER = "MgRanx";
const PASS = "aXGEWqqXVlUW8NQi";
const DATABASE_NAME = "BancoUMG";

Mongoose.connect(`mongodb+srv://${USER}:${PASS}@${SERVER}/${DATABASE_NAME}?retryWrites=true`, {useNewUrlParser: true}, (err) => {
    if(err){
        throw err;
    }
});

let typeCountSchema= new Mongoose.Schema({
    _id: Number,
    Descripcion: String
});

module.exports = Mongoose.model('tipoCuenta', typeCountSchema);