const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Jenkins Pipeline Updated!');
});

app.listen(port, () => {
  console.log(`App running updated at http://localhost:${port}`);
});
