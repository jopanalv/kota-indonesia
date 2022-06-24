// index.js
const express = require("express");
const app = express();
const { kabupaten } = require('./models');

app.use(express.json());
app.get('/kabupaten/list', async (req, res) => {
    try {
        const city = await kabupaten.findAll({
            attributes: ['id', 'nama']
        })
        res.status(200).json({
            success: true,
            data: city
        })
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})

// listen on port
app.listen(8000, () => console.log("Server running at http://localhost:5000"));