import React from "react";
import CardEditProfile from "@/component/module/cardEditProfile/cardEditProfile";
import EditForm from "@/component/module/form/formEdit";
const EditProfile = () => {
  return (
    <div style={{ marginTop: "60px", position: "relative" }}>
      <div style={{ background: "#5E50A1", height: "300px", width: "100%", position: "absolute", top: "0", zIndex: "-1" }}></div>
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 d-flex justify-content-center ">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex justify-content-center">
            <CardEditProfile />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8  pt-4 px-4" style={{ borderRadius: "10px", background: "white" }}>
            <EditForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
