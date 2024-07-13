const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    guest: { type: Number, required: true },
    budget: { type: Number, required: true }
});

module.exports = mongoose.model('Event', EventSchema);
