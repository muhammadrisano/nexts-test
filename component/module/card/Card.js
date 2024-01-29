import React from "react";
import Image from "next/image";
import ProfilePicture from "@/public/images/profilePicture.svg?url";
import Button from "@/component/base/button/button";
const Card = () => {
  return (
    <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 py-4 px-2 " style={{ border: "1px solid #F2F3F4" }}>
      <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 d-flex justify-content-center align-items-center">
        <Image src={ProfilePicture} />
      </div>
      <div className="col-sm-9 col-md-8 col-lg-8 col-xl-8 d-block justify-content-center">
        <h3>Louis Tomlinson</h3>
        <p className="text-secondary ">Web Developer</p>
        <p className="text-secondary "> Yogyakarta</p>
        <div className=" ms-0 d-flex">
          <div className="bg-warning text-light px-3 py-2">PHP</div>
          <div className="bg-warning text-light ms-2 px-3 py-2">Javascript</div>
          <div className="bg-warning text-light ms-2 px-3 py-2">HTML</div>
        </div>
      </div>
      <div className="col-sm-3 col-md-4 col-lg-2 col-xl-2 d-flex justify-content-center align-items-center">
        <Button child="Lihat Profile" style={{ background: "#5E50A1", color: "white" }} />
      </div>
    </div>
  );
};

export default Card;
