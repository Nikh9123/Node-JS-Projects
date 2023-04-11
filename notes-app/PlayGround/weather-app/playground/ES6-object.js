const name = 'Andrew';
const usrAge = 27;

const usr = {
	name,
	usrAge,
	location: 'Phagwara'
};

console.log(usr);

//object destructing 

const product = {
    label:'Red Notebook',
    price : 8,
    stack : 201 ,
    salePrice :undefined
}

// const label = product.label ;
// const stack = product.stack;\

const {label, stack, rating = 5} = product ;
console.log(label , stack , rating);

const transaction = (type , {label , stack , rating})=>{
console.log(type , stack, label,rating);
}

transaction('order' , product);
