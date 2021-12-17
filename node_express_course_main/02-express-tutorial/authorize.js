const authorize = (req,res,next)=>{
    const {user} = req.query;
    if(user === 'rohit'){
        req.user = {name:'rohit', id:3}
        next()
    }else{
        res.status(401).send('You are not welcomed here')
    }
    
}

module.exports = authorize