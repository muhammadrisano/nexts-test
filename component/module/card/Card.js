import React from "react";
import Image from "next/image";
import ProfilePicture from "@/public/images/profilePicture.svg?url";
import Button from "@/component/base/button/button";
const Card = () => {
  return (
    <div className="row py-4 px-2 " style={{ border: "1px solid #F2F3F4" }}>
      <div className="col-2 d-flex align-items-center">
        <Image src={ProfilePicture} />
      </div>
      <div className="col-8">
        <h3>Louis Tomlinson</h3>
        <p className="text-secondary ">Web Developer</p>
        <p className="text-secondary "> Yogyakarta</p>
        <div className=" ms-0 d-flex">
          <div className="bg-warning text-light px-3 py-2">PHP</div>
          <div className="bg-warning text-light ms-2 px-3 py-2">Javascript</div>
          <div className="bg-warning text-light ms-2 px-3 py-2">HTML</div>
        </div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <Button child="Lihat Profile" style={{ background: "#5E50A1", color: "white" }} />
      </div>
    </div>
  );
};

export default Card;
