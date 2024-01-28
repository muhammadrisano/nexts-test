"use client";

import Input from "@/component/base/input/input";
import React, { useState } from "react";
import Button from "@/component/base/button/button";
const FormLoginWorker = () => {
  const [values, setValues] = useState("");

  return (
    <div>
      <Input id="email" className="form-control form-control-md" type="email" name="email" label="Email" placeholder="input your Email" />
      <Input id="password" className="form-control form-control-md" type="email" name="password" label="Password" placeholder="inpit your Password" />
      <p className="text-end mt-4">Lupa kata sandi?</p>
      <Button child="Log In" style={{ width: "100%", backgroundColor: "#FBB017", borderRadius: "4px", color: "#fff", height: "50px" }} />
      <p className="text-center mt-4">
        Anda belum punya akun? <span style={{ color: "#FBB017" }}>Daftar disini</span>{" "}
      </p>
    </div>
  );
};

export default FormLoginWorker;
