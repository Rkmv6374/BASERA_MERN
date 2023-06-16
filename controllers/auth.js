// post function including try and catch
import bcrypt from 'bcrypt';
import user from "../models/user.js";
import jwt from 'jsonwebtoken';

// export const registers = async (req,res)=>
// {    
//       // const pas = req.body.password;
//       // const salt = bcrypt.genSaltSync(10);
//       // const hashpwd = await bcrypt.hash(pas,salt);
//       // const user = req.body.username;
//       // const  owner = new Register({
//       //   "username":user,
//       //   "password":hashpwd,
//       //   "isAdmin":req.body.isAdmin,
//       //   "email_id":req.body.email_id,
//       // });
//       const owner = new Register(req.body);
      
//     try{
//        const d = await owner.save();
//        res.status(200).json(d);   
//     }
//     catch(err)
//     {
//         next(err);
//     }
// }



export const authreg= async(req,res,next)=>
{
   
  // const data = 
  // {
  //   username:req.body.username,
  //   email_id:req.body.email,
  //   password:req.body.password,
  //   isAdmin:req.body.isAdmin
  // }
  
  try{
     
     const pas = req.body.password; 
     const salt = await bcrypt.genSalt(10);
     const hashpwd = await bcrypt.hash(pas,salt);
   
     const owner =  await user.create(
      {
          username:req.body.username,
          email_id:req.body.email_id,
          password:hashpwd,
          isAdmin:req.body.isAdmin
      }
    )
     const mallik =  await owner.save();
     res.status(200).json(mallik);
  }
  catch(err)
  {
    res.status(505).json("please use other username!");
    next(err);
  }
}



/// important !!!!!!!!!!!! 
// this promise must be preserved in async function when it given



export const login = async(req,res,next)=>
{

 try{
 const user1  = await user.findOne({username:req.body.username});
 if(!user1) res.status(405).json("username not find in db!");
 else{

// promise to be kept 
  let iscorrectpassword = await bcrypt.compare(req.body.password,user1.password);

//  await bcrypt.compare(req.body.password,user1.password).then((result)=>
//  {
//     res.status(200).json(user1);
//  }).catch((message)=>
//  {
//   return res.status(607).json(message);
//  });



 if(!iscorrectpassword) res.status(607).json("password is not correct!");
 else
 { 
  // const {username,password,...others} = user1;
  //  res.status(200).json(user1);
  // creating token
  // var token;

  const token = await jwt.sign({_id:user1.username,isAdmin:user1.isAdmin},process.env.key);
  return res.cookie("access_token",token,{httpOnly : true}).status(200).json({status:"success",message:"successfully stored in cookie"});

 }
}}

catch(err)
{
   next(err);
}
}


// res.cookie("access_token",token,{httpOnly:true})