// post function including try and catch
import express from 'express';
import bcrypt from 'bcryptjs';
import Register from "../models/user.js";
import User from '../models/userschec.js';
import jwt from 'jsonwebtoken';



export const registers = async (req,res,next)=>
{    
      const pas = req.body.password;
      const salt =  bcrypt.genSaltSync(10);
      const hashpwd =  bcrypt.hash(pas,salt);
      const user = req.body.username;
      const  owner = new Register({
        "username":user,
        "password":hashpwd,
        "isAdmin":req.body.isAdmin,
        "email_id":req.body.email_id,
      });
      
    try{
       const d = await owner.save();
       res.status(200).json(d);   
    }
    catch(err)
    {
        next(err);
    }
}




// export const userlogin=(req,res,next)=>
// {
//   try
//   {const username = req.body.username;
//     const password = req.body.password;
//   if(!username || !password)
//   {
//     return createError(505,"fill it properly!");
//   }
//   const user1  = user.findOne({username:username});
//   if(!user1)
//   {
//     return next(createError(402,"user not found!"));
//   }
//   var ispasswordcorrect  =  bcrypt.compare(password,user1.password);
  
//   if(!ispasswordcorrect) return  next(createError(404,"password is incorrect!"));
// //   const {passwords,isAdmin,...others} = user1;
//   if(ispasswordcorrect)
//   {
//     const token = jwt.sign({id:user1._id,isAdmin:user1.isAdmin},process.env.JWT);
//     res.cookie("access_token",token,{httpOnly:true,}).status(200).json("Successfully jwt"); // may be error
  
// } 
//   }
//   catch(err)
//   {
//     next(err);
//   }

// }













// export const login= async (req,res,next)=>
// {
//    try{
//         // const username = req.body.username;
//         // const passwords = req.body.password;
//         // if(!username || !passwords) res.status(505).json("not fill the form properly");
//         const iscorrectuser = await user.findOne({username:req.body.username});
//         if(!iscorrectuser) return res.status(404).json("username is not avilable!");
//         const  iscorrectpassword =  bcrypt.compare(req.body.password,iscorrectuser.password,(err)=>
//         {
//             if(!req.body.password)  res.status(509,"user password is empty!");
//             if(!iscorrectuser.password)   res.status(500,'database password is null or undefined');
//             next(err);
//         });
//         if(iscorrectpassword)
//         {
//           // making the tocken with jwt
//           //  const token =  jwt.sign({username:username,id:iscorrectuser._id},process.env.key,{
//           //   httpOnly:true
//           // })
//          res.status(200).json(iscorrectuser);
//         }
//         else res.status(407,"password  is not foud!");
//   }
//    catch(err)
//     {
//        next(err);
//     }
  
// }