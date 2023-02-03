import express from 'express';
import { createRoom, roomdelt, roommany, roomone, roomput } from '../controllers/room.js';
import { verifyAdmin } from '../verify/authorization.js';
const app = express();
const router = express.Router();


// create
router.post('/:hotelid',verifyAdmin,createRoom);
//update
router.put('/:id',verifyAdmin,roomput);
//delete
router.delete('/:id/:hotelid',verifyAdmin,roomdelt);
//get
router.get('/:id',roomone);
//get All
router.get('/',roommany);




export default router;