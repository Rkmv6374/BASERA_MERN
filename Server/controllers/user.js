import user from '../models/user.js';

const userput=async(req,res,next)=>
{
    // it only can update if it is admin
    try{
    //   if(user.isAdmin)
      const uphotel = await user.findByIdAndUpdate(req.params.id,{$set:req.body});;
      res.status(200).json(uphotel);
    }
    catch(err)
    {
       next(err);
    }
};


const userdelt=async(req,res)=>
{  //only delt when it is admin 
    // res.send("you r loged in");
    try{ 
      const delhotel = await user.findByIdAndDelete(req.params.id);
      res.status(200).json(delhotel);
    }
    catch(err)
    {
       next(err);
    }
}


const userone=async(req,res)=>
{
    try{  
    const gphotel = await user.findById(req.params.id);
      res.status(200).json(gphotel);
    }
    catch (err)
    {
        next(err);
    }
} 


const usermany=async(req,res)=>
{
    try{  
    const gallhotel = await user.find();
      res.status(200).json(gallhotel);
    }
    catch (err)
    {
        next(err);
    }
}


export {userput,userdelt,userone,usermany};



// // for verification 

// // means i have store access_token in cookies so i have to verify 
// //it how i am going to verify that is big question so;;;

// // const isverified = asyn(c)