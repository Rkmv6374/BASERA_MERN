import Nav from '../Components/Navbar/Nav.jsx';
import Header from '../Components/Header/Header.jsx';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './List.css';
import {format} from 'date-fns';
import { Link } from 'react-router-dom';
import pic1 from './pic-1.jpg';
import useFetch from '../Components/hooks/useFetch.js';
// import { Mycontext } from '../Components/Header/Header.jsx';
    

    // const location = useLocation();
    // const [destination,setDestination] = useState(location.state.destination);
    // const [cal,setCal] = useState(location.state.cal);
    // // const [person,setperson]= useState(location.state.person);
    








const List = ()=>
{
      
   
    const location = useLocation();
    

    const [destination,setDestination] = useState(location.state.destination);
    const [cal,setCal] = useState(location.state.cal);
    const [person,setperson]= useState(location.state.person);
    const [min,setMin] =useState(0);
    const [max,setMax] = useState(2999);
    
    const {data,loading,error,reFetch} = useFetch(`/hotel?city=${destination}&min=${min}&max=${max}`);
    // localhost:8000/hotel?city=Sitamarhi&min=0&max=9000
    // console.log(data);
  //  const item ={
  //   photos:pic1,
  //   name:"hotel Sunita",
  //   distance:"1000",
  //   desc:"heaven resides here!",
  //   rating:4,
  //   cheapestPrice:500,
  //   _id:"123"

  //   }

    const handleClick = () => {
      reFetch();
    };
    
    
const SearchItem = ({ item }) => {
    return (
      <div className="searchItem">
        <img src={item?.photos} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{item?.name}</h1>
          <span className="siDistance">{item?.distance}m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">{item?.desc}</span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          {item?.rating && <div className="siRating">
            <span>Excellent</span>
            <button>{item?.rating}</button>
          </div>}
          <div className="siDetailTexts">
            <span className="siPrice">Rs.{item?.cheapestPrice}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotels/${item?._id}`}>
            <button className="siCheckButton">See availability</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

   return(
    <div>
        <Nav />
        <Header type="list"/>
        <div className='wholefeatures'>
            <div className="featurecontainer">
             <div className="featuresearchlist">
             <div className="featuresearchbaritem">Search</div>
              <div className='featuredestination'>
               <div className='destiname'>Destination </div> 
               <snap className="destinationinputbig dateformat">{destination}</snap>
              </div>
              <div className='featurecheckin'>
               <div className="check destiname">check-in date </div>  
               <snap className="destinationinputbig dateformat">{`${format(cal[0].startDate,"MM/dd/yyyy")} to ${format(cal[0].endDate,"MM/dd/yyyy")}`}</snap>
              </div>
             
             <div className='featureoption'>
               Options
               <div className="featureoptionheading"></div>
               <div className='minprice'>Min price per night  
               <input type="number" className="destinationinput" onChange={(e) => setMin(e.target.value)}/></div>
               <div className='minprice'>Max price per night  
               <input type="number" className="destinationinput" onChange={(e)=>setMax(e.target.value)}/></div>
               <div className='minprice'>Adult
               <input type="number" className="destinationinput" min={1} placeholder={person.adults} /></div>
               <div className='minprice'>Children
               <input type="number" className="destinationinput" min={0} placeholder={person.children}/></div>
               <div className='minprice'>Room
               <input type="number" className="destinationinput" min={1} placeholder={person.room} /></div>
              </div>
                <div className='minprice searchlist'>
               <button className="searchlistbtn" onClick={handleClick}>Search</button>
              </div></div>
             <div className="featurecontentitem">
                {data.map((item)=>{
                  return (<SearchItem item={item} key={item?._id}/>);})}
             </div>
             </div>
   </div>
    </div>
   );
}


export default List;
