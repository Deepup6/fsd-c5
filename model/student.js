var mongoose=require("mongoose");
var stdSchema=mongoose.Schema({
    stdName:String,
    stdAge:Number,
    stdDept:String,
})
var stdmodel = mongoose.model("student",stdSchema);
module.exports = stdmodel