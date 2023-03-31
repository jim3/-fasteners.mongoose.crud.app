const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define a schema for the fasteners collection
const fastenersSchema = new Schema({
    partnumber: { type: Number, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
});

// Export function to create "SomeModel" model class
const FastenerModel = mongoose.model("Fasteners", fastenersSchema, "fasteners");

module.exports = FastenerModel;
