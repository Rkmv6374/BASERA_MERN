
import '../features.css';
import fetch from '../../hooks/useFetch.js';


const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];



export const Property =()=>
{
    const {data,loading,error} = fetch("/hotel/countBYType");
    // console.log(data);

    return (
        <div className="featureplace">
       <><div className="featuresroomitem">
        <img className='featurepic' src={images[0]} alt="not found" />
        <div className="propertyname">{data[0]?.type}</div>
        <div className="propertynum">{data[0]?.count} hotels</div>
        </div>
        <div className="featuresroomitem">
        <img className='featurepic' src={images[1]} alt="not found" />
        <div className="propertyname">{data[1]?.type}</div>
        <div className="propertynum">{data[1]?.count} hotels</div>
        </div>
        <div className="featuresroomitem">
        <img className='featurepic' src={images[2]} alt="not found" />
        <div className="propertyname">{data[2]?.type}</div>
        <div className="propertynum">{data[2]?.count} hotels</div>
        </div>
        <div className="featuresroomitem">
        <img className='featurepic' src={images[3]} alt="not found" />
        <div className="propertyname">{data[3]?.type}</div>
        <div className="propertynum">{data[3]?.count} hotels</div>
        </div>
        <div className="featuresroomitem">
        <img className='featurepic' src={images[4]} alt="not found" />
        <div className="propertyname">{data[4]?.type}</div>
        <div className="propertynum">{data[4]?.count} hotels</div>
        </div></>
    </div>
    );
}