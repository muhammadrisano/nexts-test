"use client";
import Input from "@/component/base/input/input";
import React, { useState } from "react";
import Button from "@/component/base/button/button";
import FormSkill from "./formSkill";
import { useRouter } from "next/navigation";
const EditForm = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    jobDesc: "",
    domicile: "",
    workplace: "",
    description: "",
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleEditProfile = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    fetch("https://fwm17-be-peword.vercel.app/v1/workers/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
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
        const message = res.message;
        alert(message);
        router.push(`/main/profile`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container">
        <h4>Data diri</h4>
        <hr />
        <form onSubmit={handleEditProfile}>
          <Input className="form-control" type="text" name="name" label="Nama Lengkap" placeholder="Masukkan nama lengkap" id="name" onChange={onChange} value={values.name} />
          <Input className="form-control" type="text" name="jobDesc" label="Job Desk." placeholder="Masukkan Job Desk." id="jobDesc" onChange={onChange} value={values.jobDesc} />
          <Input className="form-control" type="text" name="domicile" label="Domisili" placeholder="Masukkan Domisili" id="address" onChange={onChange} value={values.domicile} />
          <Input className="form-control" type="text" name="workplace" label="Tempat Kerja" placeholder="Masukkan tempat kerja" id="companyAddress" onChange={onChange} value={values.workplace} />
          <label className="form-label mt-4" htmlFor="desc" style={{ color: "#9EA0A5" }}>
            Deskrpsi Singkat
          </label>
          <textarea id="desc" className="form-control" name="description" placeholder="Masukkan deskripsi singkat" value={values.description} onChange={onChange}></textarea>
          <Button className="mt-3" child="Simpan" style={{ backgroundColor: "#FBB017", color: "#fff", width: "100%" }} />
        </form>
      </div>
      <div className="container mt-3">
        <FormSkill />
      </div>
      <div className="container mt-3">
        <h4>Pengalaman kerja</h4>
        <hr />
        <form>
          <div className="row row-cols-2 mt-2">
            <div className="col-12">
              <Input className="form-control" type="text" name="position" label="Posisi" placeholder="Web Developer" />
            </div>
            <div className="col-6">
              <Input className="form-control" type="text" name="position" label="Nama perusahaan" placeholder="PT. Harus bisa" />
            </div>
            <div className="col-6">
              <Input className="form-control" type="text" name="position" label="Bulan/Tahun" placeholder="Januari 2018" />
            </div>
            <div className="col-12">
              <label className="form-label mt-4" htmlFor="desc" style={{ color: "#9EA0A5" }}>
                Deskrpsi Singkat
              </label>
              <textarea id="desc" className="form-control" placeholder="Masukkan deskripsi singkat"></textarea>
              <hr />
            </div>

            <div className="col-12">
              <Button className="btn-outline-warning py-3" child="Simpan" style={{ width: "100%" }} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
