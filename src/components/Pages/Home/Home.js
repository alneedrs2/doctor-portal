import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Exceptional from "./Exceptional/Exceptional";
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
