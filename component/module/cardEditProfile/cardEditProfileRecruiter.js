"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Button from "@/component/base/button/button";
import {getProfileRecruiter} from "@/service/recruiterClient";

const CardEditProfileRecruiter = () => {
  const [profileData, setProfileData] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await getProfileRecruiter();
         await setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="card py-3" style={{ width: "80%", height: "fit-content", borderRadius: "10px" }}>
      <div className="card-img" style={{ boxSizing: "border-box", width: "100px", height: "100px", marginLeft: "auto", marginRight: "auto", borderRadius: "50%" }}>
        {profileData && profileData.photo ? (
          <Image src={profileData.photo} className="card-img " style={{ width: "100%", height: "auto" }} />
        ) : (
          <FaUser className="card-img " style={{ width: "100%", height: "auto", borderRadius: "50%", color: "#9EA0A5" }} />
        )}
      </div>
      <div className="d-flex justify-content-center mt-3" style={{ color: "#9EA0A5" }}>
        <MdEdit />
        Edit
      </div>
      <div className="card-body">
        <h4 className="card-title ">{profileData ? profileData.company || "-" : "-"}</h4>
        <p className="card-subtitle text-secondary">{profileData ? profileData.position || "-" : "-"}</p>
        <p className="card-subtitle text-secondary">{profileData ? profileData.city || "-" : "-"}</p>
        <Button className="mt-3" child="Simpan" style={{ color: "white", backgroundColor: "#5E50A1", width: "100%" }} />
      </div>
    </div>
  );
};

export default CardEditProfileRecruiter;