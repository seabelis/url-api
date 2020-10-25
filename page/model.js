const Sequelize = require('sequelize')
const db = require("../db");
const Page = db.define(
  'page',
  {
    url: {
      type: Sequelize.STRING,
      field:'page_url'
    }
  },
  { tableName: 'page_urls' }
)

module.exports = Page