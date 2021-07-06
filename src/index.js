let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let swaggerUI = require("swagger-ui-express");
let routeSorting = require('./routes/sorting')
let docs = require('./docs');

let app = express()
app.use(bodyParser.json())
app.use(routeSorting)
app.use(express.static('public'))
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs));

//Handler for 404
app.use((req, resp, next) => {
    resp.sendFile(path.join(__dirname, '../public/404.html'))
})

//Handler for 500
app.use((err, req, resp, next) => {
    console.error(err.stack)
    resp.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>  console.info(`Server is running on ${PORT}`))