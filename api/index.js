const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')


app.use(cors())
app.get('/hello', (req, res) => {
  res.json({message: 'Hello World from Vercel!'});
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

module.exports = app;

