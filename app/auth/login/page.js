import React from "react";

import CardAuth from "@/component/module/cardAuth/cardAuth";
import FormLogin from "@/component/module/form/formLogin";
import style from "./page.module.css";
const Login = () => {
  return (
    <div className={`row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2  ${style.loginWrapper}`}>
      <CardAuth />
      <div className="col d-flex align-items-center">
        <div className="container  mt-5" style={{ width: "80%" }}>
          <h2 style={{ color: "#1F2A36" }}>Halo, Pewpeople</h2>
          <p className="mb-4" style={{ color: "#46505C" }}>
          Kami merindukan kehadiran Anda. Silakan masuk untuk melanjutkan pencarian kerja atau mencari bakat terbaik di Peworld.
          </p>

          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
