const Express = require('express');
const BodyParser = require('body-parser');
const ExpressCURL = require('express-curl');
const UserRoute = require('./routes/user');
const clientRoute = require('./routes/client');
const countRoute = require('./routes/count');
const movesRoute = require('./routes/moves');
const typeCRoute = require('./routes/typeCount');
const typeMRoute = require('./routes/typeMove');

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(ExpressCURL);
app.use(UserRoute);
app.use(clientRoute);
app.use(countRoute);
app.use(typeCRoute);
app.use(typeMRoute);
app.use(movesRoute);


app.listen(3000, () => {
    console.info(`Serve has started on 3000`)
});
/*
app.post("/users", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.ops);
    });
});

app.get("/userss", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
    /*if(!request.query.Username || !request.query.Password)
    {
        return response.status(404).send("No hay datos")
    }
        collection.findOne({
            "Username": request.query.Username, 
            "Password": request.query.Password
        }, (error, result) => {
            if(error){
                return response.status(500).send(error);
            }
            if(!response.body)
            response.status(404).send("Usuario no existe");
            
            response.status(200).send(result)
        })*//*
});

app.get("/users/:id", (request, response) => {
    collection.find({ "Id_Cliente": Number(request.params.id) }).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});*/