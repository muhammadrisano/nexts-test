"use client";
import React from "react";
import Image from "next/image";
import image from "@/public/images/profilePicture.svg?url";
import Button from "@/component/base/button/button";
import { MdEdit } from "react-icons/md";

const CardEditProfile = (props) => {
  return (
    <div className="card py-3" style={{ width: "80%", borderRadius: "10px" }}>
      <Image src={image} className="card-img " />
      <div className="d-flex justify-content-center mt-3" style={{ color: "#9EA0A5" }}>
        <MdEdit />
        Edit
      </div>
      <div className="card-body">
        <h4 className="card-title ">Louis Tomlinson</h4>
        <p className="card-subtitle text-secondary">Web Developer</p>
        <p className="card-subtitle text-secondary">Sleman, Yogyakarta</p>
        <p className="card-subtitle text-secondary">Freelancer</p>

        <Button className="mt-3" child="Simpan" style={{ color: "white", backgroundColor: "#5E50A1", width: "100%" }} />
        <Button className="mt-2" child="Batal" style={{ color: "#5E50A1", backgroundColor: "white", border: "1px solid #5E50A1 ", width: "100%" }} />
      </div>
    </div>
  );
};

export default CardEditProfile;
