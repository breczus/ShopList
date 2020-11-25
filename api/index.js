const express = require('express')
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

app.get('/', (req, res) => {
  res.send("hello World")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})