"use client";
import React, { useState } from "react";
import Button from "@/component/base/button/button";

const FormSkill = () => {
  const [values, setValues] = useState({
    skillName: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token);
    fetch("https://fwm17-be-peword.vercel.app/v1/skills", {
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
      .then((res) => {
        console.log(res);
        const message = res.message;
        console.log(message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h4>Skill</h4>
      <hr />
      {/* <div className="d-flex" style={{ flexWrap: "wrap" }}>
        {data?.data?.map((item) => (
          <div key={item.skill_id}>{item.skillName}</div>
        ))}
      </div> */}
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
