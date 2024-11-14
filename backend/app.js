// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const detectionRoutes = require('./routes/detection');
const Packet = require('./models/packets');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', detectionRoutes);

mongoose.connect('mongodb+srv://ddos_user:ddos_password@cluster0.rzqii.mongodb.net/ddos-detection?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
