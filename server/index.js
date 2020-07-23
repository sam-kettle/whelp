const express = require("express");

// Initialise Express
const app = express();
const PORT = 5000;

// Basic route
app.get("/", (req, res) => {
    res.send("Express backend running.");
});

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
