const express = require('express');
const router = express.Router();
// const { creds } = require('./../config/default');
// const datasModel = require('./../models/datasModel');
// const bchaddr = require('bchaddrjs');
router.get('/', async function (req, res, next) {
    return 100000;
    //res.status(200).send("test delete")
})

router.get('/dummy1', async function (req, res, next) {
	console.log("hello dumm1")
    let data = 
    	[ {
    		id: 1,
    		credit: 800,
    		name: "Alice"
		},

		{
    		id: 2,
    		credit: 600,
    		name: "Bob"

    	},
    	{
    		id: 3,
    		credit: 400,
    		name: "Charlie"

    	},

    	]
    
    res.status(200).send(data);
    //res.status(200).send("test delete")
})
router.post('/dummy2', async function (req, res, next) {
		console.log("hello dummy2")

	let options = req.body;
	if (options.addr == "0x0") {
		return false;
	}
	console.log("optiond", options);

    let data = 
    	[ {
    		addr: "0x04F284E79969a1aeAE3df434244C54F1B4B6Ef73", //index 7, annoyed-alley
    		id: 1,
    		credit: 800,
    		name: "Alice"

		},
		{
    		addr: "0x04A1680D737E282eCe6DD7529aF3501542fb9220", //index 8
    		id: 2,
    		credit: 600,
    		name: "Bob"

    	},
    	{
    		addr: "0x7B158777d03282D722bAec6f49F5dc0c27895680", //index 9
    		id: 3,
    		credit: 400,
    		name: "Charlie"

    	},
    	]

    let bool = "false";
    for (let i = 0; i<data.length; i++) {
    	if (data[i].addr == options.addr) {
    		console.log("TEST",data[i].credit > 600 ? true : false)
    		bool = data[i].credit > 600 ? "HelloFromTheBackend!" : "false";
    	}
    }

    res.status(200).send({addr: bool});
    //res.status(200).send("test delete")
})


module.exports = router;