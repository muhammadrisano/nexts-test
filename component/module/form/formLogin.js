"use client";

import Input from "@/component/base/input/input";
import React, { useState } from "react";
import Button from "@/component/base/button/button";
import { useRouter } from "next/navigation";
import { login } from "@/service/auth.js";
const FormLogin = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      await login(form);
      router.push(`/main/home`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <Input id="email" className="form-control form-control-md" type="email" name="email" label="Email" placeholder="Massukkan email anda" onChange={onChange} value={form.email} />
        <Input id="password" className="form-control form-control-md" type="password" name="password" label="Password" placeholder="masukkan password anda" onChange={onChange} value={form.password} />
        <p className="text-end mt-4">Lupa kata sandi?</p>
        <Button child="Log In" style={{ width: "100%", backgroundColor: "#FBB017", borderRadius: "4px", color: "#fff", height: "50px" }} />
        <p className="text-center mt-4">
          Anda belum punya akun? <span style={{ color: "#FBB017" }}>Daftar disini</span>{" "}
        </p>
      </form>
    </div>
  );
};

export default FormLogin;
