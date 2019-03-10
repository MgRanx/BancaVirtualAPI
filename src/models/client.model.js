const Mongoose = require('mongoose');
let countSchema = require('./count.model');

const SERVER = "dbcluster-fghie.mongodb.net";
const USER = "MgRanx";
const PASS = "aXGEWqqXVlUW8NQi";
const DATABASE_NAME = "BancoUMG";

Mongoose.connect(`mongodb+srv://${USER}:${PASS}@${SERVER}/${DATABASE_NAME}?retryWrites=true`, {useNewUrlParser: true}, (err) => {
    if(err){
        throw err;
    }
});

let clientSchema= new Mongoose.Schema({
    _id: Number,
    Nombre: String,
    Apellido: String,
    Estado: String,
});

module.exports = Mongoose.model('clientes', clientSchema);
