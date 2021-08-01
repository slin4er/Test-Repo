const express = require('express')
require('./db/db')
const postRoute = require('./routers/postRoute')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(postRoute)

app.listen(port, () => {
    console.log('server is up on port' + port)
})