const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Our Middleware");
    const timestamp = new Date().toISOString();
    const url = req.url;
    console.log(`date: ${timestamp}, url: ${url}`);

    const jsonData = req.body;
    if(!jsonData || Object.keys(jsonData).length === 0) {
        return res.status(400).json({ error: 'Invalid Json Data'});
    }

    next();
});

app.post('/api/data', (req, res) => {
    const jsonData = req.body;
    console.log(jsonData);
    res.status(200).json({ message: 'Data recieved', data: jsonData });
});


app.get('/', (req, res) => {
  res.send('This is the homepage.');
});

app.post('/users', (req, res) => {
  // Handle user creation logic here.
  res.send('User created.');
});

app.put('/users/:id', (req, res) => {
  // Handle user update logic here.
  res.send(`User ${req.params.id} updated.`);
});

app.delete('/users/:id', (req, res) => {
  // Handle user deletion logic here.
  res.send(`User ${req.params.id} deleted.`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
