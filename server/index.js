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

app.post('/api/punches', (req, res) => {
    console.log(req.body)
    const dbInstance = req.app.get('db');
    const { punch_date, punch_day, punch_time, punch_type } = req.body;
    dbInstance.add_new_punch([punch_date, punch_day, punch_time, punch_type]).then((response) => {
        res.status(200).send(response)
    })
})

app.get('/api/punches', (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.get_all_punches().then((data) =>{
        res.status(200).send(data)
    })
})

app.delete('/api/punches/:id', (req, res)=>{
    const {id} = req.params
    console.log(req.params)
    const dbInstance =  req.app.get('db');
    dbInstance.delete_punch([id]).then((response) => {
        res.status(200).send(response)
    })
  })

app.listen(port, () => {
    console.log(`Ship docked at port: ${port}`)
})