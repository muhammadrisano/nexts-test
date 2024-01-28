"use client";

import Input from "@/component/base/input/input";
import React, { useState } from "react";
import Button from "@/component/base/button/button";
const FormregisterRecruiter = () => {
  const [values, setValues] = useState("");

  return (
    <div>
      <Input id="name" className="form-control form-control-md" type="text" name="name" label="Nama" placeholder="Masukan nama panjang" />
      <Input id="email" className="form-control form-control-md" type="email" name="email" label="Email" placeholder="Masukan alamat Email" />
      <Input id="companyName" className="form-control form-control-md" type="text" name="companyName" label="Nama perusahaan" placeholder="Masukan nama perusahaan" />
      <Input id="position" className="form-control form-control-md" type="text" name="position" label="Jabatan" placeholder="Masukan Jabatan" />
      <Input id="phoneNumber" className="form-control form-control-md" type="number" name="phoneNumber" label="No. Handphone" placeholder="Masukan no. handphone" />
      <Input id="password" className="form-control form-control-md" type="password" name="password" label="Kata Sandi" placeholder="Masukan kata sandi" />
      <Input id="confirmpassword" className="form-control form-control-md" type="password" name="confirmPassword" label=" Konfirmasi kata Sandi" placeholder="Masukan konfirmasi kata sandi" />
      <p className="text-end mt-4">Lupa kata sandi?</p>
      <Button child="Daftar" style={{ width: "100%", backgroundColor: "#FBB017", borderRadius: "4px", color: "#fff", height: "50px" }} />
      <p className="text-center mt-4">
        Anda sudah punya akun? <span style={{ color: "#FBB017" }}>Masuk disini</span>{" "}
      </p>
    </div>
  );
};

export default FormregisterRecruiter;
