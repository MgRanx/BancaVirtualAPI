const Mongoose = require('mongoose');
const SERVER = "dbcluster-fghie.mongodb.net";
const USER = "MgRanx";
const PASS = "aXGEWqqXVlUW8NQi";
const DATABASE_NAME = "BancoUMG";

Mongoose.connect(`mongodb+srv://${USER}:${PASS}@${SERVER}/${DATABASE_NAME}?retryWrites=true`, {useNewUrlParser: true}, (err) => {
    if(err){
        throw err;
    }
    console.log("Connected to `" + DATABASE_NAME + "`!");
});

let userSchema= new Mongoose.Schema({
    Id_Cliente: Number,
    Username: String,
    Password: String
});

module.exports = Mongoose.model('usuarios', userSchema);