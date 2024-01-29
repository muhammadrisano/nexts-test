"use client";
import React from "react";
import Image from "next/image";
import image from "@/public/images/profilePicture.svg?url";
import Button from "@/component/base/button/button";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuGitlab } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";
const CardProfile = (props) => {
  const { child } = props;
  const router = useRouter();

  return (
    <div className="card py-3" style={{ width: "80%", borderRadius: "10px" }}>
      <Image src={image} className="card-img " />
      <div className="card-body">
        <h4 className="card-title ">Louis Tomlinson</h4>
        <p className="card-subtitle text-secondary">Web Developer</p>
        <p className="card-subtitle text-secondary">Sleman, Yogyakarta</p>
        <p className="card-subtitle text-secondary">Freelancer</p>
        <p className="card-text text-secondary mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
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
