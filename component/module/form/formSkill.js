"use client";
import React, { useEffect, useState } from "react";
import Button from "@/component/base/button/button";
import { TiDeleteOutline } from "react-icons/ti";

const FormSkill = () => {
  const [skill, setSkill] = useState(null);
  const getSkill = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${process.env.NEXT_PUBLIC_HIRE_JOB_URL}/skills`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch skills data");
    }
    const data = await res.json();
    setSkill(data.data);
  };
  useEffect(() => {
    getSkill();
  }, []);

  const [values, setValues] = useState({
    skillName: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    fetch(`${process.env.NEXT_PUBLIC_HIRE_JOB_URL}/skills`, {
      method: "POST",
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
      .then(() => {
        getSkill();
        setValues({ skillName: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteSkill = async (id) => {
    const token = localStorage.getItem("token");
    await fetch(`${process.env.NEXT_PUBLIC_HIRE_JOB_URL}/skills/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const result = await res.json();
          throw result.message;
        }
        return res.json();
      })
      .then(() => {
        getSkill();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h4>Skill</h4>
      <hr />
      <div className="d-flex" style={{ flexWrap: "wrap" }}>
        {skill?.map((item) => (
          <div style={{ position: "relative" }}>
            <div className=" text-light py-2 mx-2 px-2 my-2" key={item.id} style={{ backgroundColor: "#5E50A1" }}>
              {item.skill_name}
            </div>
            <TiDeleteOutline
              className="bg-warning text-danger"
              style={{ position: "absolute", top: "0", right: "0", width: "20px", height: "auto", borderRadius: "50%", transform: "translateX(20%)", cursor: "pointer" }}
              onClick={() => deleteSkill(item.id)}
            />
          </div>
        ))}
      </div>
      <form onSubmit={handleAddSkill}>
        <div className="row mt-2">
          <div className="col-sm-9 col-md-10 col-lg-10 col-xl-10 mb-2">
            <input className="form-control" type="text" name="skillName" value={values.skillName} onChange={onChange} />
          </div>
          <div className=" col-sm-3 col-md-2 col-lg-2 col-xl-2">
            <Button child="Simpan" style={{ backgroundColor: "#FBB017", color: "#fff", width: "100%" }} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSkill;
