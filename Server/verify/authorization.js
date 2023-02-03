import { request } from 'express';
import jwt from 'jsonwebtoken';
// import {createError} from './error.js';

//now we fetch our cookie from that file and then we verify with secret key

export const verifytoken  = (req,res,next)=>
{
 
    // fetching the data from cookies
   
    try{
    const token  = req.cookies.access_token;
    //then we verify with the jwt 
    if(!token) return res.status(900).json("token not found!");
    const data  = jwt.verify(token,process.env.key);
    if(!data) return res.status(505).json("no data found from token");
    req.user1 = data;
    next();
    }
    catch(err)
    {
        next(err);
    }
};



export const verifyuser = (req,res,next)=>{verifytoken(req,res,next,()=>
{   try{
    
    if(req.params.id ===req.user1._id || req.user1.isAdmin)
    {
        next();
    }}
    catch(err)
    {
        next(err);
    }
})};


export const verifyAdmin = (req,res,next)=>{verifytoken(req,res,next,()=>
{   try{
    if(req.user1.isAdmin)
    {
        next();
    }}
    catch(err)
    {
        next(err);
    }
})};



/*
 
contact  
 
*/