"use client";

import React from "react";
import Image from "next/image";
import Button from "@/component/base/button/button";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuGitlab } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa6";

const CardProfile = (props) => {
  const { src, name, job, address, workPlace, description, child } = props;
  const router = useRouter();

  return (
    <div className="card py-3" style={{ width: "80%", borderRadius: "10px" }}>
      <div className="card-img" style={{ boxSizing: "border-box", width: "100px", height: "100px", marginLeft: "auto", marginRight: "auto", borderRadius: "50%" }}>
        {src ? <Image src={src} className="card-img " style={{ width: "100%", height: "auto" }} /> : <FaUser className="card-img " style={{ width: "100%", height: "auto", borderRadius: "50%", color: "#9EA0A5" }} />}
      </div>
      <div className="card-body">
        <h4 className="card-title ">{name}</h4>
        <p className="card-subtitle text-secondary">{job}</p>
        <p className="card-subtitle text-secondary">{address}</p>
        <p className="card-subtitle text-secondary">{workPlace}</p>
        <p className="card-text text-secondary mt-2">{description}</p>
        <Button
          child={child}
          onClick={() => {
            router.push(`/main/profile/${child.toLowerCase()}`);
          }}
          style={{ color: "white", backgroundColor: "#5E50A1", width: "100%" }}
        />
        <h4 className="mt-3">Skill</h4>
        <div className=" text-center" style={{ color: "white", width: "100%", display: "flex", flexWrap: "wrap" }}>
          <div className="bg-warning text-light px-3 py-2 my-2 me-2" style={{ width: "fit-content" }}>
            Lavarel
          </div>
          <div className="bg-warning text-light px-3 py-2 my-2 me-2" style={{ width: "fit-content" }}>
            PHP
          </div>
          <div className="bg-warning text-light px-3 py-2 my-2 me-2" style={{ width: "fit-content" }}>
            PHP
          </div>
          <div className="bg-warning text-light px-3 py-2 my-2 me-2" style={{ width: "fit-content" }}>
            PHP
          </div>
          <div className="bg-warning text-light px-3 py-2 my-2 me-2" style={{ width: "fit-content" }}>
            PHP
          </div>
          <div className="bg-warning text-light px-3 py-2 my-2 me-2" style={{ width: "fit-content" }}>
            PHP
          </div>
        </div>
        <ul className="nav  mt-3 mb-3 d-block">
          <li className="nav-item ">
            <Link className="nav-link text-secondary" href="#">
              <MdOutlineEmail /> Louistommo@gmail.com
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary" href="#">
              <FaInstagram /> @Louist91
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary" href="#">
              <FiGithub /> @Louistommo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary" href="#">
              <LuGitlab /> @Louistommo91
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardProfile;
