import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import {} from '@fortawesome/free-regular-svg-icons';
import {faBed, faCalendar, faCar, faFighterJet, faMountainCity, faPerson, faTaxi} from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import {format} from 'date-fns';// used for date string 
import { useNavigate} from 'react-router-dom';
import { createContext } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';


const Mycontext= createContext();




const Header=({type})=>
{
    const [Open,setOpen] = useState(false);
    const [openperson,setopenperson] = useState(false);
    const [cal, setCal] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

   const [person,setperson]=useState({
       adults:1,
       children:0,
       room:1
   });
  const [destination,setDestination] = useState("");

const {dispatch} = useContext(SearchContext);

const handleSearch=()=>
{
  dispatch({type:"NEW_SEARCH",payload:{destination,person,cal}});
  navigate("/hotels",{state:{person,cal,destination}});
//   <Mycontext.Provider value={sample} ></Mycontext.Provider>
}



// add and minus   .... here handleoption used to handle the same senerio of function changes when it is set to increase and decrease....onChange={e=>setDestination(e.target.value)}
  const handleoption=(name,operation)=>
  {
   setperson((prev)=>{
    return {
        ...prev,
        [name]:operation==="i"?person[name]+1:person[name]-1,
    }
   })
  }
   
   // this two line code is used for navigation from /home to /hotel
   const navigate = useNavigate();
   
   

  return (
    <div className="headersection">
    <div className="header">
        <div className={type !== "list" ?"headerList":"headerList headlistpad"}>
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <snap>Stays</snap>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faFighterJet} />
                <snap>Flights</snap>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faMountainCity} />
                <snap>Attraction</snap>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <snap>Car Rentals</snap>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <snap>Airpot Taxis</snap>
            </div>
        </div>
       { type !== "list" && <div className="desc">
            <div className="headdesc">A lifetime of discount? It's Genius</div>
            <div className='headcont'>Get reward for your travels-unlock instant saving of 10% or more with a free booking.com Acount</div>
            <div className='sign'>
             <button className="signin">Sign In/Register</button>
            </div>
            <div className='searchbar'>
            <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} /><input className='headerInput' type="text" placeholder='Where are you going?' onChange={e=>setDestination(e.target.value)}/>
                <snap className="searchmar"></snap>
            </div>
            <div className="headerSerachItem">
                <FontAwesomeIcon icon={faCalendar} />
                <snap onClick={()=>{setOpen(!Open)}} className="searchmar datecontainer">{`${format(cal[0].startDate,"MM/dd/yyyy")} to ${format(cal[0].endDate,"MM/dd/yyyy")}`}</snap>
               {Open && <DateRange
                  editableDateInputs={true}
                  onChange={item => setCal([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={cal} 
                  className="date"
               />}
            </div>
            <div className="headerSearchItem">
                 <div className="additionbutn">
                 <FontAwesomeIcon icon={faPerson} />
                <snap onClick={()=>{setopenperson(!openperson);}} className="searchmar">{`${person.adults}adults ${person.children}children ${person.room}rooms`}</snap>
               { openperson && <div className='wholebtnfun'>
               <div className="adult">
                  <div className="name">Adult</div>
                    <div className="adultcnt">{person.adults}</div>
                      <div className="plus"><button className='peoplebtn' onClick={()=>{handleoption("adults","i")}}>+</button></div>
                       <div className="minus">
                       <button className='peoplebtn'disabled={person.adults<=1} onClick={()=>{handleoption("adults","d")}}>-</button></div>
                       </div>
                <div className="children"><div className="name">Children</div>
                       <div className="adultcnt">{person.children}</div>
                       <div className="plus">
                          <button className='peoplebtn' onClick={()=>{handleoption("children","i")}}>+</button>
                          </div>
                          <div className="minus">
                          <button className='peoplebtn' disabled={person.children<=0} onClick={()=>{handleoption("children","d")}}>-</button>
                          </div>
                </div>
                <div className="room"><div className="name">Room</div>
                   <div className="adultcnt">{person.room}</div><div className="plus">
                     <button className='peoplebtn' onClick={()=>{handleoption("room","i")}}>+</button></div><div className="minus">
                       <button className='peoplebtn' disabled={person.room<=1} onClick={()=>{handleoption("room","d");}}>-</button></div>
                       </div>
            </div>}</div>
            </div>
            <div className="headerSearchItem">
                <button className="headbtn" onClick={handleSearch}>Search</button>
            </div>
            </div>
            </div>
        </div>}
    </div>
    </div>
  )
}

export default Header;
export {Mycontext};


/*

hook rendering 

import {userState} from 'react';
const [time,settime] = useState(0);

const handleonchange = ()=>
{
    settime+=1;
}

{`ejs style ${person.state}`}
<label>{time}</label>
<input type="text" onclick={handleonchange} >

const [state,setstate] = useState([
    {
        startDate:newDate(),
        endDate:null,
        key:'selection'
    }

    hnadleoption(name,operstion)
    {
        setperson((prev)=>
        {
            ...prev,
            [name]:operation==='d'?person["name"]+1:person[name]-1,
        })
    }
]);
<DateRange editableDateInputs= {true} 
function helper()
{
cnt++;
<div> {cnt}</div>
<button onclick= {helper}></button>
}

<div> cnt</div>
<button onclick= {helper}></button>

const [cnt,setcnt]= useState(0);
const handle=()=>
{   cnt++;
    setcnt(cnt);
}

const currdate = new Date();
const date = currdate.date();
const hour = date.gateHours()// getDay , getFullYear , getMonths
import {format} from 'date-fns';

const  `{format(date)}
{format(new Date()) 
const k

*/