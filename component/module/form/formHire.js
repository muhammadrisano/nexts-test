"use client";
import Input from "@/component/base/input/input";
import React, { useState } from "react";
import Button from "@/component/base/button/button";
import FormSkill from "./formSkill";
import { useRouter } from "next/navigation";
import { editProfile } from "@/service/profile";
const HireForm = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    job_desk: "",
    domicile: "",
    workplace: "",
    description: "",
  });
  const onChange = (e) => {
    setValues((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };
  const handleEditProfile = async (e) => {
    try {
      e.preventDefault();
      await editProfile(values);
      router.push(`/main/profile`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container mt-5">
       
        <form onSubmit={handleEditProfile}>
          <Input className="form-control" type="text" name="name" label="Tujuan tentang pesan ini" placeholder="Masukkan Tujuan Anda" id="name" onChange={onChange} value={values.name} />
          <Input className="form-control" type="text" name="job_desk" label="Nama Lengkap" placeholder="Masukkan Nama Lengkap" id="jobDesc" onChange={onChange} value={values.jobDesc} />
          <Input className="form-control" type="text" name="domicile" label="Email" placeholder="Masukkan Email" id="address" onChange={onChange} value={values.domicile} />
          <Input className="form-control" type="text" name="workplace" label="Nomor handphone" placeholder="Masukkan Nomor Handphone" id="companyAddress" onChange={onChange} value={values.workplace} />
          <label className="form-label mt-4" htmlFor="desc" style={{ color: "#9EA0A5" }}>
            Deskrpsi 
          </label>
          <textarea id="desc" className="form-control" name="description" placeholder="Masukkan deskripsi singkat" value={values.description} onChange={onChange}></textarea>
          <Button className="mt-3" child="Simpan" style={{ backgroundColor: "#FBB017", color: "#fff", width: "100%" }} />
        </form>
      </div>
      
    </div>
  );
};

export default HireForm;
