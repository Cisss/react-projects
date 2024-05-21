const express = require('express');
const router = express.Router();

// get data from database
let houses;
let futureHouses = [];
let pastHouses = [];
const client = require("../database/database");

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');

    // Execute SQL queries here
    client.query('SELECT * FROM houses', (err, result) => {
      if (err) {
        console.error('Error executing query', err);
      } else {
        houses = result.rows;
        houses.map((house) => {
          const inputDate = new Date(house.date);
          const currentDate = new Date();

          if (inputDate > currentDate) {
            futureHouses.push(house);
          } else {
            pastHouses.push(house);
          }
        });
        console.log({ future: futureHouses }, {past: pastHouses});
      }

      // Close the connection when done
      client.end()
        .then(() => {
          console.log('Connection to PostgreSQL closed');
        })
        .catch((err) => {
          console.error('Error closing connection', err);
        });
    });
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
  });

// send houses data to client
router.get("/", (req, res) => {
    res.json({ future: futureHouses, past: pastHouses });
});

// update house with employee by id
//UPDATE POST BY ID
router.put('/api/:id', function(res,req) {
  const houseId = req.params.id;
  const employee = req.body.employee;

  res.send(employee, ' is the new employee for house', houseId);

});

module.exports = router;