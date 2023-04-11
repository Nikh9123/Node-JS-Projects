const request = require("postman-request");

const url = 'https://apricot-magpie-shoe.cyclic.app/' ;
request({url , json:true} , (res , error)=>{
    console.log(JSON.parse(res));
})

request();
