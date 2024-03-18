"use client";

import Input from "@/component/base/input/input";
import React, { useState } from "react";
import Button from "@/component/base/button/button";
import { useRouter } from "next/navigation";
import { workerRegister } from "@/service/auth";
const FormregisterWorker = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const onChange = (e) => {
    setValues((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      await workerRegister(values);
      router.push(`/auth/login`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <Input id="name" className="form-control form-control-md" type="text" name="name" label="Nama" placeholder="Masukan nama panjang" onChange={onChange} value={values.name} />
        <Input id="email" className="form-control form-control-md" type="email" name="email" label="Email" placeholder="Masukan alamat Email" onChange={onChange} value={values.email} />
        <Input id="phoneNumber" className="form-control form-control-md" type="number" name="phone" label="No. Handphone" placeholder="Masukan no. handphone" onChange={onChange} value={values.phone} />
        <Input id="password" className="form-control form-control-md" type="password" name="password" label="Kata Sandi" placeholder="Masukan kata sandi" onChange={onChange} value={values.password} />
        <Input
          id="confirmpassword"
          className="form-control form-control-md"
          type="password"
          name="confirmPassword"
          label=" Konfirmasi kata Sandi"
          placeholder="Masukan konfirmasi kata sandi"
          onChange={onChange}
          value={values.confirmPassword}
        />
        <p className="text-end mt-4">Lupa kata sandi?</p>
        <Button child="Daftar" style={{ width: "100%", backgroundColor: "#FBB017", borderRadius: "4px", color: "#fff", height: "50px" }} />
        <p className="text-center mt-4">
          Anda sudah punya akun? <span style={{ color: "#FBB017" }}>Masuk disini</span>{" "}
        </p>
      </form>
    </div>
  );
};

export default FormregisterWorker;
