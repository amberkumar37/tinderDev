const express= require("express")

const app = express()

app.get("/",(req,res)=>{
    console.log("server check")
      res.send("server is running")
})

app.get("/test",(req,res)=>{
    console.log("test check")
    res.send("test ")
})

app.get("/form",(req,res)=>{
    console.log("form check")
    res.send("form")
})
app.listen(3333,()=>{
     console.log("server is running 3333")
})