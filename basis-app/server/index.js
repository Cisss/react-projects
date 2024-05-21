const express = require("express");
const cors = require("cors");
const app = express();
const router = require('./routes/requestsRoutes');
const PORT = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error to the console
    res.status(500).json({ error: "Internal Server Error" }); // Send a 500 Internal Server Error response
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = router;