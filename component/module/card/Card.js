import React from "react";
import Image from "next/image";
import Button from "@/component/base/button/button";
import { FaUser } from "react-icons/fa6";
const Card = (props) => {
  const { src, name, job, address, children } = props;
  return (
    <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 py-4 px-2 my-3" style={{ border: "1px solid #F2F3F4" }}>
      <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 d-flex justify-content-center align-items-center">{src ? <Image src={src} /> : <FaUser size={40} />}</div>
      <div className="col-sm-9 col-md-8 col-lg-8 col-xl-8 d-block justify-content-center">
        <h3>{name}</h3>
        <p className="text-secondary ">{job}</p>
        <p className="text-secondary "> {address}</p>
        {children}
      </div>
      <div className="col-sm-3 col-md-4 col-lg-2 col-xl-2 d-flex justify-content-center align-items-center">
        <Button child="Lihat Profile" style={{ background: "#5E50A1", color: "white" }} />
      </div>
    </div>
  );
};

export default Card;
