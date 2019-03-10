const Mongoose = require('mongoose');
let typeMove = require('./typeMove.model');

const SERVER = "dbcluster-fghie.mongodb.net";
const USER = "MgRanx";
const PASS = "aXGEWqqXVlUW8NQi";
const DATABASE_NAME = "BancoUMG";

Mongoose.connect(`mongodb+srv://${USER}:${PASS}@${SERVER}/${DATABASE_NAME}?retryWrites=true`, {useNewUrlParser: true}, (err) => {
    if(err){
        throw err;
    }
});

let movesSchema = new Mongoose.Schema({
    Id_Cuenta: Number,
    Fecha_Movimiento: Date,
    Monto: Number,
    Saldo_Inicial: Number,
    Saldo_Final: Number,
});

module.exports = Mongoose.model('movimientos', movesSchema);