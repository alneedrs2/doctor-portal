import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure className="pt-5 lg:pl-3">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          totam.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
