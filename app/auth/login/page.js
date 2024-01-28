import React from "react";

import CardAuth from "@/component/module/cardAuth/cardAuth";
import FormLoginWorker from "@/component/module/form/formLoginWorker";
import style from "./page.module.css";
const Login = () => {
  return (
    <div className={`row  ${style.loginWrapper}`}>
      <CardAuth />
      <div className="col">
        <div className="container ms-4 pe-4 mt-5">
          <h2 style={{ color: "#1F2A36" }}>Halo, Pewpeople</h2>
          <p className="mb-4" style={{ color: "#46505C" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
          </p>

          <FormLoginWorker />
        </div>
      </div>
    </div>
  );
};

export default Login;
