const express = require('express');
// const cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require("mongoose")


const nameModel =require("./model/pbschema")

let url="mongodb://localhost:27017/pbmongodb"

app.use('/',express.static('public'));
app.use(express.json());

app.get('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            nameModel.find({})
                .then((data) => {
                    res.json(data);
                    mongoose.connection.close();
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });
});

app.post('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            var model = new nameModel({
                title: req.body.title,
                value: req.body.value,
                color: req.body.color
            });

            nameModel.insertMany(model)
                .then((data) => {
                    res.json(data);
                    mongoose.connection.close();
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });
});


app.listen(port,() =>
{
    console.log('API served at https://localhost:'+port)
});