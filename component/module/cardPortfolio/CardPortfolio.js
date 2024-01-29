import React from "react";
import Image from "next/image";
import image from "@/public/images/portofolio.svg?url";
const CardPortfolio = () => {
  return (
    <div className="card mb-4">
      <Image className="card-img" src={image} />
      <div className="card-body">
        <h6 className="card-title text-center">Remainder app</h6>
      </div>
    </div>
  );
};

export default CardPortfolio;
