const {readFile,writeFile} = require('fs').promises;
const path = require('path');
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try{
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile('./content/result-mind.txt',
        `This is awesomne: ${first} ${second}`,
        { flag: 'a'}
        )
        console.log(first,second);
    } catch(error) {
        console.log(error);
    }
}
start()
// const getText = (path)=>{
//     return new Promise((res,rej)=>{
//         readFile(path,'utf-8',(err,data) => {
//             if(err){
//                 rej(err)
//             } else {
//                 res(data)
//             }
//         })
//     })
// }
// console.log('start');
// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
