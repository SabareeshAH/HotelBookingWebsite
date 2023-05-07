import React from "react"
import  "./featuredProperties.css"
import useFetch from "../../hooks/useFetch";

//import Navbar from "../components/navbar/Navbar";
//import Header from "../components/header/Header";

const FeaturedProperties= () => {
  const {data,loading,error} = useFetch("/hotel?featured=true&limit=4");
  return (
      <div className="fp">
        {loading ? "Loading Plaese Wait" :
        <>
         {data.map((item)=>( <div className="fpItem" key={item._id}>
        <img
          src={item.photos[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Starting from {data.cheapestPrice}</span>
        {item.rating && <div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>}
      </div>
      ))}
      </>
      }
      </div>
  );
}

export default FeaturedProperties;