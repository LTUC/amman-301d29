'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const server = express();
server.use(cors());
mongoose.connect('mongodb://localhost:27017/cats6', { useNewUrlParser: true, useUnifiedTopology: true });
// use cats5

//Schema
const kittySchema = new mongoose.Schema({
    ownerName: String,
    catName:String,
    catBreed:String
});

//Model
const kittenModel = mongoose.model('Kitten', kittySchema);

function seedDataCollection() {
    const sherry = new kittenModel({
        ownerName:'razan',
        catName:'sherry',
        catBreed:'angora'
    })

    const sandy = new kittenModel({
        ownerName:'razan',
        catName:'sandy',
        catBreed:'persian'
    })

    const eva = new kittenModel({
        ownerName:'saddam',
        catName:'eva',
        catBreed:'sheraz'
    })
    sherry.save();
    sandy.save();
    eva.save();
}
// seedDataCollection(); // npm start



server.get('/test', testHandler);
server.get('/getCats', getCatsHandler);

function testHandler(req, res) {
    res.send('all good')
}

// localhost:3001/getCats?ownerName=razan
function getCatsHandler(req,res) {
    console.log('inside getCatsHandler func')
    let ownerName2 = req.query.ownerName;
    kittenModel.find({ownerName:ownerName2},function(err,ownerData){
        if(err) {
            console.log('error in getting the data')
        } else {
            console.log(ownerData);
            res.send(ownerData)
        }
    })
}

server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})



