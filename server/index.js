require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')


const port = process.env.PORT

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance);
        console.log('connected to the db')
    })

app.listen(port, () => {
    console.log(`Ship docked at port: ${port}`)
})