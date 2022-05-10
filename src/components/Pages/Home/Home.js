import React from "react";
import Banner from "./Banner/Banner";
import Exceptional from "./Exceptional/Exceptional";
import Info from "./Info/Info";
import MakeAppoinment from "./MakeAppoinment/MakeAppoinment";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Exceptional></Exceptional>
      <MakeAppoinment></MakeAppoinment>
    </div>
  );
};

export default Home;
