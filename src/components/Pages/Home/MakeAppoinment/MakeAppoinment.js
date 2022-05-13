import React from "react";
import doctor from "../../../../assets/images/doctor-small.png";
import appoinment from "../../../../assets/images/appointment.png";

const MakeAppoinment = () => {
  return (
    <section
      style={{
        background: `url(${appoinment})`,
      }}
      className="flex justify-center items-center my-28"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl text-primary font-bold my-2">Appoinment</h3>
        <h2 className="text-3xl text-white my-2">Make an Appoinment Today</h2>
        <p className="text-white my-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          facilis mollitia nostrum enim atque aspernatur porro odit aliquid vero
          earum! Numquam, non! Iure quos modi perspiciatis rem earum distinctio
          deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officia, blanditiis.
        </p>
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default MakeAppoinment;
