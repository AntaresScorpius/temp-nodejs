const { json } = require('express')
const express = require('express')
const app = express()
const {products} = require('./data')

//app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">Producs</a>')
})

app.get('/api/products/:productID',(req,res) =>{
    //console.log(req);
    //console.log(req.params);
    const {productID} = req.params;
    const singleProducts = products.find(
        (product)=> product.id === Number(productID))
    if(!singleProducts){
        return res.status(404).send("PRoduct does not exist")
    }
    return res.json(singleProducts) 
})
app.get('/api/products/:productID/reviews/:reviewID',(req,res) =>{
    //console.log(req.params);
    res.send('Hellllllo world')
})
app.get('/api/v1/query',(req,res)=>{
    //console.log(req.query)
    const {search, limit} = req.query;
    let sortedProducts = [...products]
    
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
       return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProducts)
    //res.send('Hello saturn')
})

app.listen(5000, ()=> {
    console.log('server is runing om 5000');
})