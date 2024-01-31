"use client";
import CardProfile from "@/component/module/cardProfile/cardProfile";
import WorkerProfile from "@/component/module/workerProfile/workerProfile";
import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("https://fwm17-be-peword.vercel.app/v1/workers/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const data = await response.json();
        console.log(data);
        setProfileData(data.data);
      } catch (error) {
        console.error("Error fetching profile data:", error.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div style={{ marginTop: "60px", position: "relative" }}>
      <div style={{ background: "#5E50A1", height: "300px", width: "100%", position: "absolute", top: "0", zIndex: "-1" }}></div>
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 d-flex justify-content-center ">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex justify-content-center">
            {profileData && (
              <CardProfile
                child="Edit"
                href="/main/profile/edit"
                name={profileData.name}
                src={profileData.photo}
                job={profileData.job_desk || "-"}
                address={profileData.domicile || "-"}
                workPlace={profileData.workplace || "-"}
                description={profileData.description || "-"}
              />
            )}
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8  pt-4 px-4" style={{ borderRadius: "10px", background: "white" }}>
            <WorkerProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
