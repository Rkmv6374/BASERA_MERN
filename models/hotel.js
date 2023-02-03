import mongoose from "mongoose";
import {Schema} from 'mongoose';



const hotelSchema = new Schema(
    {
        name:{
          type: String,
          required:true
        },
        type:{
            type: String,
            required:true
        },
        city:
        {
            type: String,
            required:true
        },
        address:{
            type: String,
          required:true
        },
        distance:{
            type: String,
          required:true
        },
        photos:
        {
            type: [String], // many pic 
          
        },
        desc:{
            type: String,
          required:true
        },
        rating:{
            type:String,
            min:0,max:5
            // required:true
        },
        room:
        {
            type:[String],// for the availablity
        },
        cheapestPrice:{
            type:Number,
            required:true
        },
        featured:
        {
            type:Boolean,
            default:false
        }
    }
);

export default mongoose.model('Hotel',hotelSchema);