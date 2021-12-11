// const {createReadStream} = require('fs');
// const stream  = createReadStream('./content/big.txt',{encoding:'utf-8'});

// stream.on('data', (result) =>{
//     console.log(result);
// })
function ra1(){  
    return new Promise((resolve)=> {
        for(let i = 0; i < 900000; i++){
            for(let j =0; j < 10000;j++){
                
            }
        }
        resolve("wait over")
    });
}

async function ra(){
    
    var i = await ra1();
    console.log("outside");
}
ra();
console.log("Heello world");
