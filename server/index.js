const express = require("express");
const axios = require("axios");
require("dotenv").config();

// Initialise Express
const app = express();
const PORT = process.env.PORT || 5000;

// Basic route
app.get("/:term/:location", (req, res) => {
    const term = req.params.term;
    const location = req.params.location;

    const getBusinesses = async () => {
        try {
            // Use axios to fetch business data from Yelp API
            const url =
                `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`;
            const config = {
                headers: {
                    Authorization: "Bearer " + process.env.YELP_API_KEY,
                },
            };
            const result = await axios.get(url, config);
            const data = result.data.businesses;
            console.log(data)

            // Filter retrieved businesses by low ratings
            return data.filter((item) => { return item.rating <= 3.5 })

        } catch (e) {
            console.log(e);
        }
    };

    getBusinesses().then((data) => {
        res.json(data);
    });
});

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
