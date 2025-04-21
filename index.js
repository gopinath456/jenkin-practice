import express from "express";
const server=express();

server.get('/get',(req,res)=>{
  res.send('hi');
})

server.listen(500,()=>{
    console.log('server is up')
})
