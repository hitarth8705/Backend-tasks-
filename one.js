console.log("hi")
console.log("hi")
console.log("hi")
console.log("hi")
console.log("hi")
console.log("hi")
console.log("hi")
const obj=JSON.parse(`{"name":"xyz","age":"17","dob":"1997-03-14"}`);
 console.log(obj.dob);
 a = new Date(obj.dob);
 console.log(a)
 function fun(x)
 {
    console.log(x++)
 }
 setTimeout(function()
 {
    fun(1);
 },3000)