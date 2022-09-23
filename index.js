const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const config = require('./config/database')

mongoose.connect(config.url, config.dbOptions)
    .then(() => console.log('MongoDB Connected...'))
    .catch(console.error);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
