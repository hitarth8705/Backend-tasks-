const fs=require('fs')
fs.writeFile('hi.txt','hetviiii',(err)=>{
    if(err){
        console.log('error generated'+err)
    }
    else{
        fs.appendFile('hi.txt','\ni loveeee youuu ',(err)=>{
            if(err){
                console.log("Error generated" +err)
            }
            else{
                fs.readFile('hi.txt','utf-8',(err,data)=>{
                    if(err){
                        console.log("Error generated"+err)
                    }
                    else{
                        console.log(data)
                    }
                })
            }
        })
    }
})