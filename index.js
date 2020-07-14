const express = require('express')
const server = express()
const db = require('./data/connection.js')

server.use(express.json())
server.get('/', (req, res) => {
    db('cars')
    .then( response => {
       res.status(200).json(response) 
    })
    
})
server.post('/', (req, res) => {
    db('cars').insert(req.body)
    .then(response => {
        res.status(201).json({ message: "User Created", user: req.body})
    })
    .catch(error => {res.json({ error: error, message: error.message})})
})

server.listen(5000)