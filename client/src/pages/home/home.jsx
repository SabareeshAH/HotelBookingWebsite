  import React from "react"
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Featured from "../components/featured/Featured";
import PropertyList from "../components/propertyList/propertyList";
import "./home.css";
import FeaturedProperties from "../components/featuredProperties/FeaturedProperties";
import MailList from "../components/mailList/MailList";
import Footer from "../components/footer/Footer";
  const home= () => {
    return (
        <div>
          <Navbar/>
          <Header/>
          <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse by Property Type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Home Guests Love</h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/> 
          </div>
        </div>
    );
  }

  export default home;