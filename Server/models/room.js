import mongoose from "mongoose";
import {Schema} from 'mongoose';



const roomSchema = new Schema(
    {
        title:{
          type: String,
          required:true
        },
        price:{
            type: Number,
            required:true
        },
        maxPeople:
        {
            type: Number,
            required:true
        },
        desc:{
            type: String,
          required:true
        },
        roomNumbers:[{number:Number,unavailable:{type:Date}}]// tells about which room number is available at sameprice
        ,
        featured:
        {
            type:Boolean,
            default:false
        }
    }
);

export default mongoose.model('room',roomSchema);