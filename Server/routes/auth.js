import express from 'express';
import {authreg,login} from '../controllers/auth.js'


const app = express();
const router = express.Router();


router.post("/register",authreg);
router.post("/login",login);


export default router;
