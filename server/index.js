const express = require("express");
const axios = require("axios");
require("dotenv").config();

// Initialise Express
const app = express();
const PORT = process.env.PORT || 5000;

// Basic route
app.get("/", (req, res) => {
    res.send("Express backend running.");
});

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
