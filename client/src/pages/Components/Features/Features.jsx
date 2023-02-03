
import useFetch from '../hooks/useFetch.js';
import './features.css';
import { Guest } from './part/Guest.jsx';
import {Property} from './part/Property.jsx'





const Features =()=>
{
    const {loading,data,err} = useFetch("/hotel/countByCity?cities=Muzaffarpur,Patna,Sitamarhi");
    // const {loading,data,err} = useFetch("/hotel/countByType");
    
return (
  <div className="featurewhole">
  <div className="feature">
    <div className="featureplace">
       { loading ? ("please waith while loading"):(<><div className="featureplaceitem">
            <img className='featurepic' src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="not found" />
            <div className="statefeat">Muzaffarpur</div>
            <div className="stateproperty">{data[0]} Property</div>
        </div>
        <div className="featureplaceitem">
        <img className='featurepic' src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" alt="not found" />
        <div className="statefeat">Patna</div>
            <div className="stateproperty">{data[1]} Property</div>
        </div>
        <div className="featureplaceitem">
        <img className='featurepic'  src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" alt="not found" />
        <div className="statefeat">Sitamarhi</div>
            <div className="stateproperty">{data[2]} Property</div>
        </div></>)}
    </div>
     <div className='middletext'>Browse By Property Type</div>
     <Property/>
     <Guest/>
</div>
</div>)

}

export default Features;