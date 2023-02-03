import axios from "axios";
import { nextDay } from "date-fns/esm";
 import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContex";

import "./Register.css";

 const Register = () => {
  // const [credentials, setCredentials] = useState({
  //   username: undefined,
  //   emailid:undefined,
  //   password: undefined,
  // });

//   const { loading, error, dispatch } = useContext(AuthContext);

   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };



//   const handleClick = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("/auth/login", credentials);
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
//       navigate("/")
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
//     }
//   };



const [credentials,setCredentials] = useState({
  username:undefined,
  password:undefined,
  email_id:undefined
});

const handleChange =(e)=>
{
   setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}));
}

// to submit the data to the axios
// console.log(credentials);
const handleClick = async()=>
{

  try{
        
      const res = await axios.post("/auth/register",credentials);
      navigate('/',{state:{credentials}});
  }
  catch(err)
  {
    console.log(err.response.data);
  }

}



  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange} 
          className="lInput"
        />
        <input
          type="email"
          placeholder="abc@gmail.com"
          id="email_id"
          onChange={handleChange} 
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">
          Login
        </button>
        {/* {error && <div>{error.message}</div>} */}
      </div>
    </div>
  );
  };

export default Register;
