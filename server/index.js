// Holds CRUD requests. 
require("dotenv").config();


const express = require('express')
const {SERVER_PORT} = process.env
const app = express()
app.use(express.json())

const ac = require('./ArticleControllor')
// make endpoints here

app.post('/api/article', ac.saveArticle )

app.get('/api/savedList', ac.updateList )

app.post('/api/savedList', ac.addItem)

app.put('/api/savedList', ac.editItem)

app.delete('/api/savedList/:index', ac.deleteItem)




app.listen(SERVER_PORT, () => {
    console.log(`Running on server ${SERVER_PORT}`)
})