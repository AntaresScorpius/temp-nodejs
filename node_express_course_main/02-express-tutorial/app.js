const express = require('express')
const app = express()
const path = require('path')

app.get('/',(req,res)=>{
     
})
app.get('*',(req,res)=>{
    res.status(404).send('not found')
})

app.listen(5000, ()=> {
    console.log('server is runing om 5000');
})