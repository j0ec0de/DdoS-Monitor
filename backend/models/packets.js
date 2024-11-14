// models/Packet.js
const mongoose = require('mongoose');

// Define schema for packet logs
const packetSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    // Add more fields as needed for DDoS detection
});

// Create a model based on the schema
const Packet = mongoose.model('Packet', packetSchema);

module.exports = Packet;
