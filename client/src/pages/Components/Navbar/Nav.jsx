import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';
// import Header from '../Header/Header';
const  Navbar =  ()=>
{
   const location = useLocation();
   console.log(location.state);
   // const idname = location.state.username;
   // console.log(idname);
   const  userid = (location.state!== null)? location.state.credentials.username:null;
   console.log(userid);
   const { user } = useContext(AuthContext);
   return (
    <div>
    <div className="nav">
    <div className="navhead">
      <div className="booking">
        <div className="bookingname">
       <Link to="/"><div className="logo" style={{color:"white",textDecoration:"none"}}>BASERA</div></Link></div>
      </div>
       <div className="include">
       {(user||userid)?( userid ||user.username):(<><Link to="/register"><button className="register"> Register</button></Link>
       <Link to="/login"><button className="register">Sign In</button></Link></>)}
       </div>
    </div>
    </div>
    </div>
   )
}

export default Navbar;
