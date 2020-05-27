const router = require('express').Router()


// reference to List class, List.js in todoapprepo
// const List = require('../List.js')
// const list = new List()


// not included in todoapp sever.js example
//????
// const fs = require('fs')
// const { promisify } = require.apply('util')
// const wf = promisify(writeFile)
// const af = promisify(appendFile)
// const rf = promisify(readFile)

let idTracker = 0

// RESTful routing (Representational State Transfer)

// GET  HTML route  - return the "index.html" file
router.get('*'), (req, res) => {
  res.sendFile(join(__dirname, "index.html"))
}

// GET  HTML route  - return the "notes.html" file
router.get('/notes'), (req, res) => {
  res.sendFile(join(__dirname, "notes.html"))
}

// GET to read the notes stored in the db.json file and display the notes in JSON format
// db.query for reading db.json file
router.get('/api/notes', (req, res) => {
  rf('db/db.json', 'utf-8')
    .then(notesList => {
      notesList = JSON.parse(notesList)
    })
  res.json(notesList)
})
// .catch(err => console.error(err))

// POST a note
// receives a new input for note to save on the request body, adds it to the db.json file, and then returns the new note to the client.
router.post('/api/notes', (req, res) => {
  let { title, text } = req.body
  let newNote = { title, text, id: idTracker }
  idTracker++
  rf('db/db.json', 'utf-8')
    .then(notesList => {
      notesList = JSON.parse(notesList)
      notesList.push(newNote)
      wf('/db/db.json', 'notesList')
    })
})
// .catch(err => console.error(err))

// DELETE a note
router.delete('/api/notes/:id', (req, res) => {
  let id = req.params.id
  console.log(id)
  rf('/db/db.json', 'utf-8')
    .then(notesList => {
      notesList = JSON.parse(notesList)
      let filteredNotes = notesList.splice(id, 1)
      wf('/db/db.json', filteredNotes)
    })
})
// .catch(err => console.error(err))

module.exports = router
