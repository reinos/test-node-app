const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

// if you want to run locally change port to 3000
// for Apphosting use port 80
const PORT = 80;

// to deploy it to AppHosting please use IP:0.0.0.0
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  setInterval(() => console.log(`some random number ${Math.random()}`), 1000);
  res.send('Hello World!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
