var u=require("url"); 
var addr="http://localhost:8080/xyz.html?name=karan&age=21"; 
var q=u.parse(addr,true); 
query=q.query
 console.log(query.name);