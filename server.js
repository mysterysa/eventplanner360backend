const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const eventRoutes = require('./routes/events');
app.use('/events', eventRoutes);

const vendorRoutes = require('./routes/vendors');
app.use('/vendors', vendorRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Event Planner API!');
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
