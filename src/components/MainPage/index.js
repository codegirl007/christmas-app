import React from "react";
import Map from "../Map";

const MainPage = () => {
  const handleCountryClick = (value) => {console.log('calling from mainpage', value)}
  
  return (
    <Map handleCountryClick={handleCountryClick}/>
  )
}

export default MainPage;