const fs = require('fs');
const express= require("express");
const app = express();


/*read file  || write file */
fs.readFile('demo.txt',(err, data)=>{
    console.log(data.toString());
});

/*write file*/
  
fs.writeFile('demo.txt',"world",(err, data)=>{
    console.log(data)
 } )


/* delete file*/
 fs.unlink('demo.txt',(err, data)=>{
    if(err){
        console.log(err)
    }
 })


/*update file*/
 fs.appendFile('fsygu.txt',"add",(err, data)=>{
    if(err){
        console.log(err)
    }
    else
    {
        console.log(data)
    }
})




