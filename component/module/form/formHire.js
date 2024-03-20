"use client";
import Input from "@/component/base/input/input";
import React, { useEffect, useState } from "react";
import Button from "@/component/base/button/button";
import FormSkill from "./formSkill";
import { useRouter } from "next/navigation";
import { editProfile } from "@/service/profile";
import { hireWorker } from "@/service/hire";

import { getProfileRecruiter } from "@/service/recruiterClient";
const HireForm = ({ id }) => {
  const router = useRouter();
  const [profileData, setProfileData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfileRecruiter();
        await setProfileData(response);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  const [values, setValues] = useState({
    message_purpose: "",
    worker_id:  id ,
    name:  "",
    email:  "",
    phone:  "",
    description: "",
  });
  const onChange = (e) => {
    setValues((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };
  const handleHire = async (e) => {
    try {
      e.preventDefault();
      await hireWorker(values);
      alert(`Hire Worker Success`)
      router.push(`/main/profile`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <form onSubmit={handleHire}>
          <Input
            className="form-control"
            type="text"
            name="message_purpose"
            label="Tujuan tentang pesan ini"
            placeholder="Masukkan Tujuan Anda"
            id="name"
            onChange={onChange}
            value={values.message_purpose}
          />
          <Input
            className="form-control"
            type="text"
            name="name"
            label="Nama Lengkap"
            placeholder="Masukkan Nama Lengkap"
            id="jobDesc"
            onChange={onChange}
            value={ values.name}
          />
          <Input
            className="form-control"
            type="text"
            name="email"
            label="Email"
            placeholder="Masukkan Email"
            id="address"
            onChange={onChange}
            value={ values.email}
          />
          <Input
            className="form-control"
            type="text"
            name="phone"
            label="Nomor handphone"
            placeholder="Masukkan Nomor Handphone"
            id="companyAddress"
            onChange={onChange}
            value={values.phone}
          />
          <label
            className="form-label mt-4"
            htmlFor="desc"
            style={{ color: "#9EA0A5" }}
          >
            Deskrpsi
          </label>
          <textarea
            id="desc"
            className="form-control"
            name="description"
            placeholder="Masukkan deskripsi singkat"
            value={values.description}
            onChange={onChange}
          ></textarea>
          <Button
            className="mt-3"
            child="Simpan"
            style={{ backgroundColor: "#FBB017", color: "#fff", width: "100%" }}
          />
        </form>
      </div>
    </div>
  );
};

export default HireForm;
