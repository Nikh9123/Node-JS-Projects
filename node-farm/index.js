const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');

const replaceTemplate = require('./modules/replaceTemplate');

//* /////////////////////////////////////////////////////////////////
//* -----------FILE SYSTEM---------------

//* Blocking synchronus code
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log('reading file : ', textIn);
// const textOut = `This is what we know about avocado: ${textIn}.\n Created on ${Date.now()} `;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File Written');

//* Non-blocking asynchronus code

// fs.readFile('./txt/start.txt', 'utf-8', (err1, data1) => {
// 	if (err1) return console.log('ERROR!❌');
// 	fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err2, data2) => {
// 		if (err2) console.log(err2);
// 		console.log(data2);
// 		fs.readFile('./txt/append.txt', 'utf-8', (err3, data3) => {
// 			if (err3) console.log(err3);
// 			console.log(data3);
// 			fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err4) =>
// 				console.log('your file has been written successfully! 🙂')
// 			);
// 		});
// 	});
// });
// console.log('will read file');

///////////////////////////////////////////

//* ---------------SERVER----------------

//TODO  READ HTML TEMPLATE
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);

//TODO READ JSONFILE
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);
const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

//todo 1) create server
const server = http.createServer((req, res) => {
  // console.log(req.url);
  // console.log('hello', url);
  // console.log(url.parse(req.url, true));
  const { query, pathname } = url.parse(req.url, true);
  const pathName = req.url;
  console.log(pathname);

  //TODO 2) ---------ROUTING---------------
  //* OVERVIEW PAGE
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

    res.end(output);
  }
  //* PRODUCT PAGE
  else if (pathname === '/product') {
    // console.log('we are in product page!')
    // console.log(query);
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  }
  //* API PAGE
  else if (pathname === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json',
    });
    res.end(data);
  }
  //* ERROR PAGE
  else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello world',
    });
    res.end('<h1>page not found 404</h1>');  
  }

  // res.end('Hello from the server !');
});

//todo 2) listening request from client
server.listen(8000, '127.0.0.1', () => {
  console.log('listening to requests on port 8000');
});