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

// Change data
router.put(
  '/pages/:id',
  (request, response, next) => Page
    .findByPk(request.params.id)
    .then(page => page.update(request.body))
    .then(page => response.send(page))
    .catch(next)
)

// Delete data
router.delete(
  '/pages/:id',
  (request, response, next) => Page
    .destroy({ where: { id: request.params.id }})
    .then(number => response.send({ number }))
    .catch(next)
)

module.exports = router;