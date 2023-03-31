const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //
// Set up mongoose connection
const uri = process.env.MONGO_DB_CONNECTION_STRING;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/api/fasteners", require("./routes/fastenerRoutes"));

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
