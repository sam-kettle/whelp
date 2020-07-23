const express = require("express");
const axios = require("axios");
require("dotenv").config();

// Initialise Express
const app = express();
const PORT = process.env.PORT || 5000;

// Basic route
app.get("/", (req, res) => {
    const getData = async () => {
        try {
            const url =
                "https://api.yelp.com/v3/businesses/search?term=barbers&location=Birmingham";
            const config = {
                headers: {
                    Authorization: "Bearer " + process.env.YELP_API_KEY,
                },
            };
            const result = await axios.get(url, config);
            return result.data;
        } catch (e) {
            console.log(e);
        }
    };
    getData().then((data) => {
        res.json(data);
    });
});

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
