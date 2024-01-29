import CardProfile from "@/component/module/cardProfile/cardProfile";
import WorkerProfile from "@/component/module/workerProfile/workerProfile";
import React from "react";

const DetailProfile = () => {
  return (
    <div style={{ marginTop: "60px", position: "relative" }}>
      <div style={{ background: "#5E50A1", height: "300px", width: "100%", position: "absolute", top: "0", zIndex: "-1" }}></div>
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="row ">
          <div className="col-4">
            <CardProfile child="Hire" />
          </div>
          <div className="col-8  pt-4 px-4" style={{ borderRadius: "10px", background: "white" }}>
            <WorkerProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;
