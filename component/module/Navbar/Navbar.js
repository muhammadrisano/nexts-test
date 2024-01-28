import React from "react";
import Image from "next/image";
import logo from "@/public/images/navbarLogo.svg?url";
import { FaRegBell } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className=" navbar navbar-expand-lg bg-body-light fixed-top  ">
      <div className="container-fluid ">
        <a className="navbar-brand ms-5" href="/main/home">
          <Image src={logo} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
          <ul className=" nav navbar-nav  me-5 mb-2 mb-lg-0 justify-content-end ">
            <li className="nav-item me-4">
              <Link className="nav-link" href="#">
                <FaRegBell />
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" href="#">
                <MdMailOutline />
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" href="/main/profile">
                <FaUserCircle />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
