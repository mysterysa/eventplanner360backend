const express = require('express');
const router = express.Router();
const Vendor = require('../models/vendor');

router.post('/', async (req, res) => {
    try {
        const newVendor = new Vendor(req.body);
        await newVendor.save();
        res.status(201).send(newVendor);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;