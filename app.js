//local
//npm install <pkgname>

//global
// npm install -g <pkgname>

//package.json manifest file
//ways to create package.json
//manual approach (create package.json and write the properties)
//npm init (step by step  will ask you about version and etc)
//npm init -y (default)
const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
console.log('hello world');