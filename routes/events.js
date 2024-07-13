const express = require('express');
const router = express.Router();
const Event = require('../models/event');

router.post('/', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).send(newEvent);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
