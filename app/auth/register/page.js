import React from "react";
import CardAuth from "@/component/module/cardAuth/cardAuth";
import TabContainer from "@/component/module/form/formRegister";
const Register = () => {
  return (
    <div>
      <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
        <CardAuth />
        <div className="col  d-flex align-items-center">
          <div className="container  mt-5" style={{ width: "80%" }}>
            <h2 style={{ color: "#1F2A36" }}>Halo, Pewpeople</h2>
            <p className="mb-4" style={{ color: "#46505C" }}>
            Apakah Anda mencari pekerjaan yang sempurna atau mencari talenta terbaik untuk tim Anda? Daftarkan diri Anda di Peworld dan mulailah perjalanan Anda menuju kesuksesan
            </p>

            <TabContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
