const { Router } = require("express")
const Page = require('./model')

const router = new Router();

router.get("/pages", (req, res, next) => {
  Page.findAll().then(pages => {
    res.send(pages);
  })
  .catch(next);
})

module.exports = router;