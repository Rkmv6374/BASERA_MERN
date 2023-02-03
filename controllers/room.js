import Room from '../models/room.js';
import Hotel from '../models/hotel.js';

//create Room
const createRoom = async(req,res,next)=>
{
    // get hotel id from 
    const hotelId = req.params.hotelid;
    const saveRoom = await Room.create(req.body);

    // fething the data and just save it in hotel room 

    try{
        const newroom =await saveRoom.save();
        try{
        await Hotel.findByIdAndUpdate(hotelId,{$push:{room:newroom._id}});
        
    }
        catch(err)
        {
            next(err);
        }
        res.status(200).json("updated rooms booking");

    }catch(err)
    {
        next(err);
    }
}
//update delete\

const roomput= async(req,res)=>
{
    
    try{
      const uphotel = await Room.findByIdAndUpdate(req.params.id,{$set:req.body});;
      res.status(200).json(uphotel);
    }
    catch(err)
    {
       next(err);
    }
};





const roomdelt=async(req,res)=>
{
    try{ 
      await Room.findByIdAndDelete(req.params.id);
      res.status(200).json("room deleted");
      try{
        await Hotel.findByIdAndUpdate({_id:req.param.hotelid},{$pull:{room:saveRoom}});
        
    }
        catch(err)
        {
            next(err);
        }
    }
    catch(err)
    {
       next(err);
    }
}




const roomone=async(req,res)=>
{
    try{  
    const gphotel = await Room.findById(req.params.id);
      res.status(200).json(gphotel);
    }
    catch (err)
    {
        next(err);
    }
} 




const roommany=async(req,res)=>
{
    try{  
    const gallhotel = await Room.find();
      res.status(200).json(gallhotel);
    }
    catch (err)
    {
        next(err);
    }
}


export {createRoom,roomput,roomdelt,roomone,roommany};

