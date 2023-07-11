const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://Harshit787:abcAtlas14@clusterrestapi.ftd35hj.mongodb.net/",{
   //useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Conected to database")
}).catch((e)=>{
    console.log("Not Connected");

})
