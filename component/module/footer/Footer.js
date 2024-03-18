import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.svg?url";
import Link from "next/link";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid d-flex justify-content-center" style={{ background: "#5E50A1", marginTop: "70px" }}>
        <div className="container footerWrapper ">
          <div className=" imageWrapper d-flex">
            {" "}
            <Image src={logo} /> <p className="text-light ms-2">Peworld</p>
          </div>
          <div className=" textWrapper ms-0">
            <p className="text-light">Bergabunglah dengan Peworld hari ini dan mari bersama-sama menjelajahi dunia peluang karier dan rekrutmen yang tak terbatas!</p>
          </div>

          <hr />
          <div className="d-flex justify-content-between">
            <p className="text-light ms-0 mt-2">2020 Pewworld. All right reserved</p>
            <ul className="nav d-flex mt-0 mb-4">
              <li className="nav-item ">
                <Link className="nav-link text-light" href="#">
                  Telepon
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href="#">
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
