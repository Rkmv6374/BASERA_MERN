import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './listFeature.css';



const Listfeature = ()=>
{

   
   const location = useLocation();
   console.log(location);
//    const [destination,setDestination] = useState(location.state.destination);
//    const [state,setState] = useState(location.state.state);
//    const [person,setperson] = useState(location.state.destination);
   
   
   
   
   
   return  (<div className='wholefeatures'>
            <div className="featurecontainer">
             <div className="featuresearchlist">
             <div className="featuresearchbaritem">Search</div>
              <div className='featuredestination'>
               <div>Destination </div>  
               <input type="text" className="destinationinputbig" />
              </div>
              <div className='featurecheckin'>
               <div>check-in date </div>  
               <input type="text" className="destinationinputbig" />
              </div>
             
             <div className='featureoption'>
               Options
               <div className="featureoptionheading"></div>
               <div className='minprice'>Destination   
               <input type="number" className="destinationinput" /></div>
               <div className='minprice'>Destination   
               <input type="number" className="destinationinput" /></div>
               <div className='minprice'>Destination 
               <input type="number" className="destinationinput" /></div>
               <div className='minprice'>Destination 
               <input type="number" className="destinationinput" /></div>
               <div className='minprice'>Destination 
               <input type="number" className="destinationinput" /></div>
              </div>
                <div className='minprice searchlist'>
               <button className="searchlistbtn">Search</button>
              </div></div>
             <div className="featurecontentitem"></div>
             </div>
     
   </div>);
}

export default Listfeature;