import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.svg?url";
import style from "./cardAuth.module.css";
const CardAuth = () => {
  return (
    <div className={`col ${style.bgWrapper}`}>
      <div className="d-flex mt-5 ms-5">
        <Image src={logo} alt="Peworld" />
        <h6 className="text-light mt-1 ms-1">Peworld</h6>
      </div>
      <div className={`container ${style.titleWrapper}`}>
        <h1 className="text-light">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
      </div>
    </div>
  );
};

export default CardAuth;
