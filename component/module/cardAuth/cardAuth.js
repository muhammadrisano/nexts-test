import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.svg?url";
import style from "./cardAuth.module.css";
const CardAuth = () => {
  return (
    <div className={`col ${style.bgWrapper}`}>
      <div className={`${style.imageWrapper} `}>
        <Image src={logo} alt="Peworld" />
        <h6 className="text-light ">Peworld</h6>
      </div>
      <div className={`container ${style.titleWrapper}`}>
        <h1 className="text-light ">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
      </div>
    </div>
  );
};

export default CardAuth;
