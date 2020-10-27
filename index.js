const express = require('express')

//middlewares
const app = express()

// const corsMiddleware = require('cors')
// app.use(corsMiddleware)

const port = process.env.PORT || 4000

// const db = require("./db");
// const Page = require("./page/model")

const bodyParser = require("body-parser");
const bodyParserMiddleware = bodyParser.json()
app.use(bodyParserMiddleware)

const pageRouter = require("./page/router")
app.use(pageRouter)
.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
