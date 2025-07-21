const fs=require('fs')
fs.writeFileSync("Source.txt",'ABC0')
data=fs.readFileSync('Source.txt','utf-8')
data1=fs.writeFileSync('destination.txt',data)
data1=fs.readFileSync('destination.txt','utf-8');
console.log(data1)