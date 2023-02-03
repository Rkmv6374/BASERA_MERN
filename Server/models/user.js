import mongoose from "mongoose";
import {Schema} from 'mongoose';


const registerSchema =  new Schema(
    {
        username:{
            type:String,
            required:true
           },
          email_id:
          {
           type:String,
           required:true
          },
          password:
          {
            type:String,
            required:true
          },
          isAdmin:
          {
            typer:Boolean,
            default:false
          },
    },{timestamps:true}
);


export  default mongoose.model('user',registerSchema);



