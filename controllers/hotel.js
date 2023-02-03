import Hotel from '../models/hotel.js';

const cntput=async(req,res,next)=>
{
    
    try{
      const uphotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body});;
      res.status(200).json(uphotel);
    }
    catch(err)
    {
       next(err);
    }
};

const cntpost=async(req,res,next)=>
{
  const hotelxy = await Hotel.create(req.body);
  try{
     const savehotel = await hotelxy.save();
     res.status(200).json(savehotel);
  }
  catch(err)
  {
    next(err);
  }
}


const cntdelt=async(req,res,next)=>
{
    try{ 
      const delhotel = await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json(delhotel);
    }
    catch(err)
    {
       next(err);
    }
}




const getone=async(req,res,next)=>
{
    try{  
    const gphotel = await Hotel.findById(req.params.id);
      res.status(200).json(gphotel);
    }
    catch (err)
    {
        next(err);
    }
} 




const getmany=async(req,res,next)=>
{  const {min,max,...others} = req.query;
    try{  
    const gallhotel = await Hotel.find({...others,cheapestPrice:{$gt:min||100,$lt:max||2000}}).limit(req.query.limit);
      res.status(200).json(gallhotel);
    }
    catch (err)
    {
        next(err);
    }
}

export const countBYCity =async(req,res,next)=>
{ const cities = req.query.cities.split(",");
  try{
     
       // to count the city // countByCity?cities=muzaffarpur,sitamrhi,patna
       const list  = await Promise.all(cities.map(city=>{
          return Hotel.countDocuments({city:city});
       }))
      res.status(200).json(list);
  } 
  catch(err)
  {
    next(err);
  }

}

export const countBYType=async(req,res,next)=>{

  const hotelcnt = await Hotel.countDocuments({type:"hotel"});
  const apartmentcnt = await Hotel.countDocuments({type:"apartment"});
  const villacnt = await Hotel.countDocuments({type:"villa"});
  const resortcnt = await Hotel.countDocuments({type:"resort"});
  const cabincnt = await Hotel.countDocuments({type:"cabins"});
  
   try{
         
         res.status(200).json([
          {type:"hotel", count:hotelcnt},
          {type:"apartment", count:apartmentcnt},
          {type:"villa", count:villacnt},
          {type:"resort", count:resortcnt},
          {type:"cabins", count:cabincnt},
         ]);
   }
   catch(err)
   {
     next(err);
   }

}

export {cntput,cntdelt,cntpost,getone,getmany};