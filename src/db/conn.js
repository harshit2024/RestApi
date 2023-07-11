const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentapi2",{
   //useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Conected to database")
}).catch((e)=>{
    console.log("Not Connected");

})
