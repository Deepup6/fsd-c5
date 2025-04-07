var mongoose = require("mongoose");

mongoose.
connect("mongodb+srv://deepupp227:deepu@cluster0.md2a0km.mongodb.net/deepu?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("CONNECTED TO DB")
})
.catch((err)=>(console.log(err)))