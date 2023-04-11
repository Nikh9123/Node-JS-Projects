setTimeout(() => {
	console.log('starting of callback');
}, 2000);

const names = [98,45,67,43,677,24];
const number = names.filter( Element => Element>80 ) 
console.log(number);
// console.log('jiii');

const geoCode = (address ,callback) => {
    setTimeout( ()=>{
        const data ={
            latitude : 0 ,
            longitude:0
    }
    callback( data) ;
 },2000);
}
geoCode('jainagar', (data)=>{
    console.log(data);
});
// console.log(data);

//*-------------PRACTICE------------
/*

Goal: Mess around with the callback pattern

1. Define an add function that accepts the correct arguments
2. Use setTimeout to simulate a 2 second delay
3. After 2 seconds are up, call the callback function with the sum
4. Test your work!
*/
/**
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} callback a asynchronse function
 */
const sum = (num1,num2,callback)=>{
    setTimeout( ()=>{
     add = num1 + num2 ;
     callback(add);
    },2*1000)
};
sum(1,4,(addition)=>{
    console.log(addition);
})
