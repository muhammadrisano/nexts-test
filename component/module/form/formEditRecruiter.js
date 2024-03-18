"use client";
import Input from "@/component/base/input/input";
import React, { useState } from "react";
import Button from "@/component/base/button/button";

import { useRouter } from "next/navigation";
import { editProfile } from "@/service/profile";
const EditFormRecruiter = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    company: "",
    position: "",
    city: "",
    description: "",
    phone: "",
    instagram: "",
    linkedin: "",
    photo: ""
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
      <div className="container">
        <h4>Data diri</h4>
        <hr />
        <form onSubmit={handleEditProfile}>
          <Input className="form-control" type="text" name="company" label="Company Name" placeholder="Masukkan Nama Perusahaan" id="name" onChange={onChange} value={values.company} />
          <Input className="form-control" type="text" name="position" label="Position" placeholder="Masukkan Posisi" id="jobDesc" onChange={onChange} value={values.position} />
          <Input className="form-control" type="text" name="city" label="City" placeholder="Masukkan Kota" id="address" onChange={onChange} value={values.city} />
          <Input className="form-control" type="number" name="phone" label="Phone Number" placeholder="Masukkan Nomor Telepon" id="companyAddress" onChange={onChange} value={values.phone} />
          <Input className="form-control" type="text" name="instagram" label="Instagram" placeholder="Masukkan Instagram" id="companyAddress" onChange={onChange} value={values.instagram} />
          <Input className="form-control" type="text" name="linkedin" label="LinkedIn" placeholder="Masukkan LinkedIn" id="companyAddress" onChange={onChange} value={values.linkedin} />
          <Input className="form-control" type="text" name="photo" label="Photo" placeholder="Masukkan Photo" id="companyAddress" onChange={onChange} value={values.photo} />
          <label className="form-label mt-4" htmlFor="desc" style={{ color: "#9EA0A5" }}>
            Deskrpsi Singkat
          </label>
          <textarea id="desc" className="form-control" name="description" placeholder="Masukkan deskripsi singkat" value={values.description} onChange={onChange}></textarea>
          <Button className="mt-3" child="Simpan" style={{ backgroundColor: "#FBB017", color: "#fff", width: "100%" }} />
        </form>
      </div>
      
    </div>
  );
};

export default EditFormRecruiter;