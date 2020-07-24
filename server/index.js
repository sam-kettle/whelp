const express = require("express");
const axios = require("axios");
require("dotenv").config();

// Initialise Express
const app = express();
const PORT = process.env.PORT || 5000;

// Route for front-end to collect data
app.get("/:type/:location", (req, res) => {
    const type = req.params.type;
    const location = "51.509865,-0.118092";
    const key = process.env.MAPS_API_KEY;
    const radius = 8000;

    const getBusinesses = async () => {
        try {
            // Use axios to fetch business data from Yelp API
            const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${key}`;

            const result = await axios.get(url);
            const data = result.data.results;
            console.log(data);

            // Filter retrieved businesses by low ratings
            return data.filter((item) => {
                return item.rating <= 3.9;
            });
        } catch (e) {
            console.log(e);
        }
    };

    getBusinesses().then((data) => {
        res.json(data);
    });
});

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
