const path = require('path')

console.log(path.sep);
//gives normalized path eg. will remove "//" and stuff
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);