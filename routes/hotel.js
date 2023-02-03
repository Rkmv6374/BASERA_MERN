import express from 'express';
const app = express();
const router = express.Router();
import {cntput,cntdelt,cntpost,getone,getmany, countBYCity, countBYType} from '../controllers/hotel.js'
import {verifyAdmin} from '../verify/authorization.js';



//create
router.post('/',verifyAdmin,cntpost);
//update
router.put('/find/:id',verifyAdmin,cntput);
//delete
router.delete('/find/:id',verifyAdmin,cntdelt);
//get
router.get('/find/:id',getone);
//get All
router.get('/',getmany);

router.get('/countBYCity',countBYCity);
router.get('/countBYType',countBYType);



export default router;











/* 
try
{
    await moongoose.connect(process.env.MONG);
    
}
catch
{
    throw(err);
}
const hotel = new moongose.model("hotelmodel",hotelschema);

moongose.Schema(name:{type:String},);
vsr obj1 =
{
    "name":"rama",
    "type"
}
const newpos = new hotel({"name":"Aman Raj",:type:"it is a 3rd year boy means studying in 15th"});

newpos.save();
newpos.save();

//now we have to make authentication for authantication we need  authuroise name admin if 

*/