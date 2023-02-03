import '../features.css';
import fetch from "../../hooks/useFetch.js";

const pic = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

export const Guest =()=>
{
    const {data,loading,error} = fetch("hotel?featured=true&limit=4");
    // console.log(data);
    return (
        <div className="featureplace">
        {loading?("loading"):(<><div className="hoteltypeitem">
        <img className='featurepic' src={data[0]?.photos[0]||pic[0]} alt="not found" />
        <div className="hotelname">{data[0]?.name}</div>
        <div className="hotelnum">Rating : {data[0]?.rating}</div>
        <div className="hotelprice">Starting from {data[0]?.cheapestPrice}</div>
        </div>
        <div className="hoteltypeitem"> <img className='featurepic' src={data[1]?.photos[0]||pic[1]} alt="not found" />
        <div className="hotelname">{data[1]?.name}</div>
        <div className="hotelnum">Rating : {data[1]?.rating}</div>
        <div className="hotelprice">Starting from {data[1]?.cheapestPrice}</div>
        </div>
        <div className="hoteltypeitem"> <img className='featurepic' src={data[2]?.photos[0]||pic[2]} alt="not found" />
        <div className="hotelname">{data[2]?.name}</div>
        <div className="hotelnum">Rating : {data[2]?.rating}</div>
        <div className="hotelprice">Starting from {data[2]?.cheapestPrice}</div>
        </div>
        <div className="hoteltypeitem"> <img className='featurepic' src={data[3]?.photos[0]||pic[3]} alt="not found" />
        <div className="hotelname">{data[3]?.name}</div>
        <div className="hotelnum">Rating : {data[3]?.rating}</div>
        <div className="hotelprice">Starting from {data[3]?.cheapestPrice}</div>
        </div></>)}
    </div>
    )
}