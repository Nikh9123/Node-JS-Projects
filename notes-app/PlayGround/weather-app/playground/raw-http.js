const http = require('node:http');
const url = `http://api.weatherstack.com/current?access_key=53e76c76e13953a6fa97c8cdaf3e26ca&query=45,-75&units=f`;

const request = http.request(url, (response) => {
let data = '';
  //* 
	response.on('data', (chunk) => {
    data = data + chunk.toString();
  });
  //*
  response.on('end',()=>{
  const body = JSON.parse(data)
  console.log(body);
  })
});

request.on('error',(error)=>{
  console.log('An error' +error);
})
request.end();


