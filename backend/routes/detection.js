// routes/detection.js
const express = require('express');
const Packet = require('../models/packets');
const calculateEntropy = require('../entropy');
const router = express.Router();

router.post('/log-packet', async (req, res) => {
    const { ip } = req.body;
    const packet = new Packet({ ip, timestamp: new Date() });
    await packet.save();
    res.status(200).send('Packet logged');
});

// routes/detection.js
router.get('/detect-ddos', async (req, res) => {
    try {
        const packets = await Packet.find();
        console.log("Packets from DB:", packets); // Log the data from MongoDB

        const ips = packets.map(packet => packet.ip);
        const entropy = calculateEntropy(ips);
        const isDDoS = entropy < 1.0;

        console.log("Entropy:", entropy);
        console.log("Is DDoS:", isDDoS);

        res.json({ entropy, isDDoS });
    } catch (error) {
        console.error('Error during DDoS detection:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;
