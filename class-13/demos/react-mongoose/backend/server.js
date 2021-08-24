'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const server = express();
server.use(cors());

// Middleware (to parse the request body)
server.use(express.json());


mongoose.connect('mongodb://localhost:27017/cats6', { useNewUrlParser: true, useUnifiedTopology: true });
// use cats5

//Schema
const kittySchema = new mongoose.Schema({
    ownerName: String,
    catName: String,
    catBreed: String
});

//Model
const kittenModel = mongoose.model('Kitten', kittySchema);

function seedDataCollection() {
    const sherry = new kittenModel({
        ownerName: 'razan',
        catName: 'sherry',
        catBreed: 'angora'
    })

    const sandy = new kittenModel({
        ownerName: 'razan',
        catName: 'sandy',
        catBreed: 'persian'
    })

    const eva = new kittenModel({
        ownerName: 'saddam',
        catName: 'eva',
        catBreed: 'sheraz'
    })
    sherry.save();
    sandy.save();
    eva.save();
}
// seedDataCollection(); // npm start



server.get('/test', testHandler);
server.get('/getCats', getCatsHandler);
server.post('/addCat', addCatHandler);
server.delete('/deleteCat/:catId2',deleteCatHandler);

function testHandler(req, res) {
    res.send('all good')
}

// localhost:3001/getCats?ownerName=razan
function getCatsHandler(req, res) {
    console.log('inside getCatsHandler func')
    let ownerName2 = req.query.ownerName;
    kittenModel.find({ ownerName: ownerName2 }, function (err, ownerData) {
        if (err) {
            console.log('error in getting the data')
        } else {
            console.log(ownerData);
            res.send(ownerData)
        }
    })
}

async function addCatHandler(req, res) {
    console.log(req.body);
    // { catName: 'mishmish', catBreed: 'persian', ownerName: 'razan' }
    // let owner = req.body.ownerName;
    // let name = req.body.catName;
    // let breed = req.body.catBreed;
    let { catName, catBreed, ownerName } = req.body;
    // const newCat = new kittenModel({
    //     ownerName: ownerName,
    //     catName: catName,
    //     catBreed: catBreed
    // })

    // await newCat.save();

    await kittenModel.create({ownerName,catName,catBreed})
    // await kittenModel.create(req.body)


    kittenModel.find({ ownerName }, function (err, ownerData) {
        if (err) {
            console.log('error in getting the data')
        } else {
            console.log(ownerData);
            res.send(ownerData)
        }
    })



}

// localhost:3001/deleteCat/454554?ownerName=razan
// localhost:3001/deleteCat?catID=454545
function deleteCatHandler(req,res) {
    // console.log(req.query.catID)
    console.log('inside the deleteCatHandler')
    console.log(req.params)
    console.log(req.params.catId2);
    let ownerName= req.query.ownerName;

    let catDataID = req.params.catId2;
    kittenModel.remove({_id:catDataID},(error,catData)=>{
        if(error) {
            console.log('error in deleteing the data')
        } else {
            console.log('data deleted', catData)
            kittenModel.find({ ownerName }, function (err, ownerData) {
                if (err) {
                    console.log('error in getting the data')
                } else {
                    console.log(ownerData);
                    res.send(ownerData)
                }
            })
        }
    })



}

server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})



