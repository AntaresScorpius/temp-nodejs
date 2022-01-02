const { json } = require('express')
const express = require('express')
//let {people} = require('./data')
const app = express()
//static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended:false }))
app.use(express.json())
const people = require ('./routes/people')
const auth = require('./routes/auth')

app.use('/api/people',people)
app.use('/login', auth)



app.listen(5000, ()=> {
    console.log('server is runing om 5000');
})