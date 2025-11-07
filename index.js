const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const api=process.env.HOST;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server running on http://${api}:${PORT}`);
});
//gg