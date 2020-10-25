const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const db = require("./db");
const Page = require("./page/model")


app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});