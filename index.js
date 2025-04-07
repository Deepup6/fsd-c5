var express=require("express");
require("./db")

var app=express();
var port=3000;
var empmodel=require("./model/employee")
app.use(express.json())

app.post('/',(req,res)=>{
    try{
        empmodel(req.body).save();
        res.send("date added to db")
    }catch(err){
        res.send(err)
        console.log

    }
})

app.get('/',async(req,res)=>{
    try{
        var data = await empmodel.find();
        res.send(data)
    } catch(err){
        res.send(err)
    }

})
app.delete('/:id', async(req,res)=>{
    try{
        await empmodel.findByIdAndDelete(req.params.id);
        res.send("Data deleted")
    } catch(err){
    res.send(err)
    }
})

app.put('/:id', async(req,res)=>{
    try {
        await empmodel.findByIdAndUpdate(req.params.id,req.body);
        res.send("edited")
    } catch (err) {
        res.send(err)
    }
})
app.listen(port,()=>{
    console.log(`server is up and running in ${port}`)

});