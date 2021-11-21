const express = require("express")
const app = express()
const mongoose = require("mongoose")
const schema = require('./schema')
const url = "mongodb+srv://raghav:123pass@cluster0.uylba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>console.log("Connected to DB"))
app.use(express.json())
app.post('/new-post', async (req,res)=>{
    const name = req.body.Name;
    const reg = req.body.RegNo;
    const marks = req.body.Marks;
    try{
        const newData = new schema({
            Name: name,
            RegNo: reg,
            Marks: marks
        })
        const saveData = await newData.save()
    }catch(err){
        res.json(err);
    }
})

app.use("/",(req,res)=>{
    res.send("Server is Working")
})

app.listen(3000,()=>{
    console.log("Express is Working");
})
