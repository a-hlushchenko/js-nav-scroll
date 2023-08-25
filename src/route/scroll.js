const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('scroll', {
    name: 'scroll',
    component: [],
    title: 'scroll',

    data: {
    },
  })
})

module.exports = router
