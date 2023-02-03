import express from 'express';
import{userdelt,usermany,userone,userput} from '../controllers/user.js'
import {verifyAdmin,verifyuser} from '../verify/authorization.js';

const app = express();
const router = express.Router();


// router.get('/check/:id',verifyuser,(req,res,next)=>
// {  try{
//    res.send("you are loged in!")}
//    catch(err)
//    {
//      throw err;
//    }
// }
// );

//update
router.put('/:id',verifyuser,userput);
//delete
router.delete('delete/:id',verifyuser,userdelt);
//get
router.get('/:id',verifyuser,userone);
//get All
router.get('/',verifyAdmin,usermany);


export default router;