const express = require('express');
const router = express.Router();
// const { creds } = require('./../config/default');
// const datasModel = require('./../models/datasModel');
// const bchaddr = require('bchaddrjs');
//Mock KYC Performed by a Third Party:
router.get('/', async function (req, res, next) {
    return 100000;
    //res.status(200).send("test delete")
})

//https:______.ngrok.io/encryption/?grossincome=50000&ssn=012345678&fname=alice&lname=smith&dob=01011990
module.exports = router;