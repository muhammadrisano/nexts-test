import React from "react";
import RecruiterProfile from "../profile/recruiter";
import WorkersProfile from "../profile/worker";

const Profile = ({ userRole }) => {
  console.log(userRole)
  return (
    <div style={{ marginTop: "60px", position: "relative" }}>
      <div
        style={{
          background: "#5E50A1",
          height: "300px",
          width: "100%",
          position: "absolute",
          top: "0",
          zIndex: "-1",
        }}
      ></div>
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 d-flex justify-content-center ">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex justify-content-center">
            {userRole === "recruiter" ? <RecruiterProfile /> : <WorkersProfile />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;