const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('nav', {
    name: 'nav',
    component: [],
    title: 'Навігація',

    data: {
    },
  })
})

module.exports = router
