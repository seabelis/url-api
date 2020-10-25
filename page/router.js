const { Router } = require("express")
const Page = require('./model')

const router = new Router();

router.get("/pages", (req, res, next) => {
  Page.findAll().then(pages => {
    res.send(pages);
  })
  .catch(next);
});

router.get("/pages/:pageId", (req, res, next) => {
  Page.findByPk(req.params.pageId)
    .then(page => {
      res.send(page);
    })
    .catch(next);
});

// Add a page url
router.post('/pages', (req, res, next) => {
  Page.create(req.body)
      .then(page => res.json(page))
      .catch(err => next(err))
})

module.exports = router;