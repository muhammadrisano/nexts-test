"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Button from "@/component/base/button/button";
import { getProfileWorkers } from "@/service/workerClient";

const CardEditProfile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfileWorkers()
  await setProfileData(response)
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
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
        <h4 className="card-title ">{profileData ? profileData.name || "-" : "-"}</h4>
        <p className="card-subtitle text-secondary">{profileData ? profileData.job_desk || "-" : "-"}</p>
        <p className="card-subtitle text-secondary">{profileData ? profileData.domicile || "-" : "-"}</p>
        <p className="card-subtitle text-secondary">{profileData ? profileData.workplace || "-" : "-"}</p>
        <Button className="mt-3" child="Simpan" style={{ color: "white", backgroundColor: "#5E50A1", width: "100%" }} />
        <Button className="mt-2" child="Batal" style={{ color: "#5E50A1", backgroundColor: "white", border: "1px solid #5E50A1 ", width: "100%" }} />
      </div>
    </div>
  );
};

export default CardEditProfile;
