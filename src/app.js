const express=require("express")
require("./db/conn");
const bodyParser = require('body-parser');
const Student=require("./models/student")
const app=express();

const port=process.env.PORT||3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.get("/",async(req,res)=>{
    res.sendFile(__dirname+ "/index.html");
})
app.get("/students",async(req,res)=>{
   

 try{
     const stud=await Student.find()
     res.json(stud)
 }catch(err){
     res.send(err)
 }

 
})
app.get("/students/:id",async(req,res)=>{
   

    try{
        const _id=req.params.id
        const studentdata=await Student.findById(_id)
        res.json(studentdata)
    }catch(err){
        res.send(err)
    }
   
    
   })


   
 app.post("/studentsi",async(req,res)=>{

      const namea=req.body.name;
      const emaila=req.body.email;
      const phonea=req.body.phone;
      const addressa=req.body.location;
      const livinga=req.body.living;

    const newUser = new Student({
        name: namea,
        email: emaila ,
        phone:phonea ,
        address:addressa,
        livingCreature:livinga

      });
      newUser.save()
      .then(() => {
        console.log('User saved to the database');
      })
      .catch((error) => {
        console.error('Error saving user:', error);
      });

      res.send("Data is Saved");
 }) 
 

app.post("/students",async(req,res)=>{
      
    

    try{
        const user=new Student(req.body)
        const a1=await user.save()
        res.json(a1)
    }catch(err){
         res.send(err)
    }

    
})


app.delete("/students/:id",async(req,res)=>{
  
 

 try{
     


     const deletedata=await Student.findByIdAndDelete(req.params.id)
     if(!req.params.id){
           return req.statusCode(400).send()
     }
     res.send(deletedata)
 }catch(err){
      res.send(err)
 }

 
})


app.patch("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id
        const updatedata=await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updatedata)
    }catch(e){
        res.status(400).send(e)
    }
})
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})