// listfRoutes reference from todoapp repo

const router = require('express').Router()
const List = require('../List.js')

const list = new List()

// RESTful routing (Representational State Transfer)

// GET all items
router.get('/items', (req, res) => {
  let items = list.getItems()
  res.json(items)
})

// POST an item
router.post('/items', (req, res) => {
  list.addItem(req.body)
  res.sendStatus(200)
})

// PUT an item
router.put('/items/:text', (req, res) => {
  list.updateItem(req.params.text)
  res.sendStatus(200)
})

// DELETE an item
router.delete('/items/:text', (req, res) => {
  list.deleteItem(req.params.text)
  res.sendStatus(200)
})

module.exports = router