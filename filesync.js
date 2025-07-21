var ps=require("fs");
// ps.mkdirSync("node");
ps.writeFileSync("node/write.txt","Hello");
ps.appendFileSync("node/write.txt","Hi");
data=ps.readFileSync("node/write.txt",'utf-8');
console.log(data);
console.log(data.toString());