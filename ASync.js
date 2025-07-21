fs = require("fs")
// fs.writeFile('test1.txt', 'Hello World!', (err) => {
//  if (err) { console.log("Error Generated"+err); }
//  else { console.log("Written"); }
// });
// fs.appendFile('test1.txt', '\nGood Morning!', (err) => {
//  if (err) { console.log("Error Generated"+err); }
//  else { console.log("Appended"); }
// });
// fs.readFile('test1.txt',"utf-8", (readErr, data) => {

//  if (readErr) { console.error("Error Generated: "+readErr) }
//  else { console.log(data); }
// })
// fs.rename('test1.txt','test2.txt',() => {console.log("Renamed")})
fs.unlink('test2.txt', unlinkErr => {
 if (unlinkErr) { throw unlinkErr; }
 else { console.log("Deleted")}
});
console.log("Last sentence")