const express = require('express');
const router = express.Router();
const ip = require("ip");
const os = require("os");

router.get('/pucsd', async(req, res) => {
    let d = Date(Date.now());
    date = d.toString()

    let obj = {
        CurrentTimeinIST : date,
        IPAddress : ip.address(),
        Hostname : os.hostname(),
        City : "Pune",
        Region : "Maharastra",
        Country : "India"
    }
    res.send(obj);
});

module.exports = router;