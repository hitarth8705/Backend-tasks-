var u=require("url");
var addr="http://localhost:8080/default.html?year=2025&month=feb";
var q=u.parse(addr,true);
console.log(q);
var qdata=q.query;
console.log(qdata.year);
console.log(qdata.month);
if(qdata.year%4==0){
    console.log("It is a leap year0")
}
else{console.log("Not a leap year")}
