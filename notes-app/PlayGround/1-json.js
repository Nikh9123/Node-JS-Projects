// const fs = require('fs');

// // const book = {
// //     title:'Ego is the enemy',
// //     author:'Ryan Holiday'
// // }

// // const BOOKjson = JSON.stringify(book);
// // fs.writeFileSync('1-json.json',BOOKjson);

// const dataBuffer = fs.readFileSync('1-json.json');
// const JSONbook = dataBuffer.toString();
// // console.log(JSONbook);
// const data = JSON.parse(JSONbook);
// console.log(data.title);


// ----------------- PRACTICE--------------------
const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer);

const OBjdata = JSON.parse(dataBuffer);
console.log(OBjdata);
OBjdata.name = "Nikhil", OBjdata.planet = "Mars", OBjdata.age = 19
console.log(OBjdata);

const strData = JSON.stringify(OBjdata);
console.log(strData);

fs.writeFileSync('1-json.json',strData);