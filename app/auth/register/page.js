import React from "react";
import CardAuth from "@/component/module/cardAuth/cardAuth";
import TabContainer from "@/component/module/form/formRegister";
const Register = () => {
  return (
    <div>
      <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
        <CardAuth />
        <div className="col d-flex justify-content-center">
          <div className="container  mt-5" style={{ width: "80%" }}>
            <h2 style={{ color: "#1F2A36" }}>Halo, Pewpeople</h2>
            <p className="mb-4" style={{ color: "#46505C" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
            </p>

            <TabContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
