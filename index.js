const express = require('express')

//Middlewares
const bodyParser = require('body-parser')
const cors = require('cors')
const bodyParserMiddleware = bodyParser.json()
const corsMiddleware = cors()

// Routers
const pageRouter = require("./page/router")

// const db = require("./db");
// const Page = require("./page/model")

// Init
const app = express()
const port = process.env.PORT || 4000

app
  .use(corsMiddleware)
  .use(bodyParserMiddleware)
  .use(pageRouter)
  .listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });
