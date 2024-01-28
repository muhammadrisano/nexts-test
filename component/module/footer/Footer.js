import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.svg?url";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid d-flex justify-content-center" style={{ background: "#5E50A1", marginTop: "70px" }}>
        <div className="container " style={{ marginTop: "70px", width: "80%" }}>
          <div className="d-flex" style={{ paddingTop: "70px" }}>
            {" "}
            <Image src={logo} /> <p className="text-light ms-2">Peworld</p>
          </div>
          <div className=" ms-0" style={{ width: "30%" }}>
            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
          </div>

          <hr style={{ color: "#fff", marginTop: "67px" }} />
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
