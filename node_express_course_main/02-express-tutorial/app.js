const { json } = require('express')
const express = require('express')
const app = express()
const {products} = require('./data')
const logger = require('./logger')
const authorize = require('./authorize')
//req => middleware => res
//.use is invoked for every get
// if path is provided then applies to all paths having path as root 
app.use([logger,authorize])  // order matters before every get()
app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    
    res.send('Products')
})
app.get('/api/items',(req,res)=>{
    console.log(req.user);
    res.send('Ittems')
})

app.listen(5000, ()=> {
    console.log('server is runing om 5000');
})