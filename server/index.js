// Holds CRUD requests. 
require("dotenv").config();

const ac = require('./ArticleControllor')

const express = require('express')
const {SERVER_PORT} = process.env
const app = express()
app.use(express.json())

const saved = []

// make endpoints here
app.get('/api/saved', )

app.post('/api/saved', ac.saveArticle )

app.put('/api/saved', )

app.delete('/api/saved', )




app.listen(SERVER_PORT, () => {
    console.log(`Running on server ${SERVER_PORT}`)
})