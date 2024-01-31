"use client";

import Input from "@/component/base/input/input";
import React, { useState } from "react";
import Button from "@/component/base/button/button";
import { useRouter } from "next/navigation";
const FormLogin = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    fetch("https://fwm17-be-peword.vercel.app/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(async (res) => {
        if (!res.ok) {
          const result = await res.json();
          throw result.message;
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        const message = res.message;
        alert(message);
        router.push(`/main/home`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <Input id="email" className="form-control form-control-md" type="email" name="email" label="Email" placeholder="input your Email" onChange={onChange} />
        <Input id="password" className="form-control form-control-md" type="password" name="password" label="Password" placeholder="inpit your Password" onChange={onChange} />
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
