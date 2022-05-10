import React from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Exceptional from "./Exceptional/Exceptional";
import Footer from "./Footer/Footer";
import Info from "./Info/Info";
import MakeAppoinment from "./MakeAppoinment/MakeAppoinment";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Exceptional></Exceptional>
      <MakeAppoinment></MakeAppoinment>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
