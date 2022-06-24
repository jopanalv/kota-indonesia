// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000
const { kabupaten } = require('./models');

app.use(express.json());
app.get('/', () => "List Kota di Indonesia")
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
app.listen(PORT, () => console.log("Server running at", PORT));