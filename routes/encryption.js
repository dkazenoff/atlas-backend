const express = require('express');
const router = express.Router();
const NodeRSA = require('node-rsa');


/// test/demo_form.php?name1=value1&name2=value2
//https:______.ngrok.io/encryption/?grossincome=50000&ssn=012345678&fname=alice&lname=smith&dob=01011990

router.post('/', async function (req, res, next) { //Standard Post for Atlas Encryption
    const key = new NodeRSA({ b: 512 });
    let options = req.body;
    // let secret = "This is a non readable secret";
    let secret = '{"grossincome":"50000","ssn": "012345678","fname": "Alice","lname": "Smith","phone": "123-555-1010","dob": "01/01/1995"}'

    let public_key = await key.exportKey('public');
    let private_key = await key.exportKey('private');
    // console.log(public_key + "\n\n")

    // console.log(private_key);
    let key_private = new NodeRSA(private_key); //Sent ONLY to third party
    let key_public = new NodeRSA(public_key);
    // sent_public_key = public_key;   
    // sent_private_key = private_key; 
    let encryptedString = await key_public.encrypt(secret, 'base64'); //Sent to Solidty Contract!

    //DECRYPTION by Third Party;
    let decryptedString = await key_private.decrypt(encryptedString, 'utf8');
    //private key for decryption
    console.log("DECRYPTED!", decryptedString);

    res.send(encryptedString);
    //res.status(200).send("test delete")
})

router.get('/dekyc', async function (req, res, next) { //Standard Post for Atlas Encryption
    console.log(req.query, typeof req.query)
    console.log(req.query.pubkey);
    if (Object.keys(req.query).length === 0 && req.query.constructor === Object) {
        res.send({ score: "FAILED, empty {} " });
        return;
    }

    // let key_private = new NodeRSA(private_key); //Sent ONLY to third party
    // let key_public = new NodeRSA(public_key);
    // console.log("GET request:", req.query)
    let options = req.query;

    let { pubkey, uuid } = options;
    console.log("pubKeyExtracted:", pubkey)

    // let options = JSON.parse(req.query);

    // let secret = '{"grossincome":"50000","ssn": "012345678","fname": "Alice","lname": "Smith","phone": "123-555-1010","dob": "01/01/1995"}'

    // let public_key = options.pubkey;
    // let private_key = await key.exportKey('private');
    // let key_private = new NodeRSA(private_key); //Sent ONLY to third party
    // let key_public = new NodeRSA(public_key);

    if (pubkey === "0x04F284E79969a1aeAE3df434244C54F1B4B6Ef73" && uuid === "1519211809934") {
        res.send({ score: "PASSED!!!!1519211809934" })
        return;
    }

})



module.exports = router;