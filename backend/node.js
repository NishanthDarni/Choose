const express=require('express')
const app=express()
const cors = require('cors');
const gsmarena = require('gsmarena-api');
const bodyParser=require("body-parser")
app.use(bodyParser.json());
app.use(cors())
app.post('/search',async function (req,res){
    const data=req.body.dataa
    var result=await gsmarena.search.search(data)
    res.send(result)
})
app.post('/getMobile',async function(req,res){
    const id=req.body.idd
    var result=await gsmarena.catalog.getDevice(id)
    console.log(result)
    res.send(result)
})
app.listen(5000,function (){console.log("server started")});