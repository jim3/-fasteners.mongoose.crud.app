const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const FastenerModel = require("../models/fastenerModel");

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Get all fasteners
router.get("/", async (req, res) => {
    try {
        const fasteners = await FastenerModel.find();
        res.status(200).json({ success: true, data: fasteners });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to get fasteners" });
    }
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Create a new fastener
router.post("/", async (req, res) => {
    try {
        const { partnumber, description, quantity, price } = req.body;

        // Create a new fastener document
        const newFastener = new FastenerModel({ partnumber, description, quantity, price });

        // Save the document to the collection
        await newFastener.save();

        res.status(201).json({ success: true, message: "Fastener created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to create fastener" });
    }
});

module.exports = router;
