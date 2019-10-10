// Holds CRUD requests. 
require("dotenv").config();


const express = require('express')
const {SERVER_PORT} = process.env
const app = express()
app.use(express.json())

const ac = require('./ArticleControllor')

app.post('/api/article', ac.saveArticle )

app.post('/api/savedList', ac.addItem)

app.put('/api/savedList/:id', ac.editItem)

app.delete('/api/savedList/:title/:id', ac.deleteItem)




app.listen(SERVER_PORT, () => {
    console.log(`Take us to warp ${SERVER_PORT}!`)
})