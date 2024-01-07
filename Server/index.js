const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

app.get('/data', (req, res) => (res.send(mockResponse)));

app.listen(port, () => console.log(`Listening on port ${port}!`));