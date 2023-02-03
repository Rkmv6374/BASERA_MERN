import express from 'express';
import mongoose from 'mongoose';
import  dotenv from 'dotenv';
import bodyParser from 'body-parser';
import auth from './routes/auth.js';
import hotel from './routes/hotel.js';
import room from './routes/room.js';
import user from './routes/user.js';
import cookieParser from 'cookie-parser';


// const {urlencoded} = bodyParser;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// connection of mongodb  
dotenv.config();

mongoose.set('strictQuery',true);

async function connect()
{
try {
   
  mongoose.connect(process.env.MONGO);
  console.log("mongodb server is connected!");

} catch(err)
{
    throw(err);
}
}

// middleware 

app.use('/auth',auth);
app.use('/room',room);
app.use('/user',user);
app.use('/hotel',hotel);


app.use((err, req, res, next) => {
   const errorStatus = err.status || 500;
   const errorMessage = err.message || "Something went wrong!";
   return res.status(errorStatus).json({
     success: false,
     status: errorStatus,
     message: errorMessage,
     stack: err.stack,
   });
 });

//get request
// app.get('/',(req,res)=>
// {
//    res.send("hello!");
// });



//listen request 
app.listen(process.env.port||8000,(err)=>{
connect();
if(err) console.log("Disconected with backend!");
else  console.log("connected with backend!");
});








/*
 handling the error by middleware 

  router.use((err,req,res,next)=>
  {
     return res.status(err.Status).json(
        {
            "success" :false,
            "error":err.message
        }
     )
  })


  import mongoose,express,bodyparser,app,router to get 
  cnnection 
  async function connection()
  {
   try()
   {
      mongoose.connect(process.env.MONGO);
      res.status(200).json("passed");
   }
   catch(err)
   {

   }
  }

  // creating the schemas 

  import {Schema} from mongoose;

  const hotel = mongoose.Schema(
   name:{type:string,
         required:true 
   }
   addres:{
      type:String, rrequired:true // boolean // data Number for integer
   }
  )
  const hotel = mongose.model('hotel',schema);

  const c1 = 
  {
    "name":"Aman",
    "address":"hteruhgvd"
  }
  
  cosnt t1 = new hotel(c1);
  await t1.save();
  try()
  update 
   cosnt k = awit hotel.findByIdAndUpadate("id",{$set:{"name":"john singh"}});


*/