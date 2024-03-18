"use client";
import React, { useEffect, useState } from "react";
import Button from "@/component/base/button/button";
import { TiDeleteOutline } from "react-icons/ti";
import { addSkill, deleteSkill, getSkill } from "@/service/skill";

const FormSkill = () => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const handleGetSkill = async () => {
    const response = await getSkill();
    setSkills(response.data);
  };
  useEffect(() => {
    handleGetSkill();
  }, []);

  const handleAddSkill = async (e) => {
    try {
      e.preventDefault();
      await addSkill(skill);
      handleGetSkill();
      setSkill("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteSkill = async (id) => {
    try {
      await deleteSkill(id);
      handleGetSkill();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h4>Skill</h4>
      <hr />
      <div className="d-flex" style={{ flexWrap: "wrap" }}>
        {skills.map((item) => (
          <div style={{ position: "relative" }}>
            <div className=" text-light py-2 mx-2 px-2 my-2" key={item.id} style={{ backgroundColor: "#5E50A1" }}>
              {item.skill_name}
            </div>
            <TiDeleteOutline
              className="bg-warning text-danger"
              style={{ position: "absolute", top: "0", right: "0", width: "20px", height: "auto", borderRadius: "50%", transform: "translateX(20%)", cursor: "pointer" }}
              onClick={() => handleDeleteSkill(item.id)}
            />
          </div>
        ))}
      </div>
      <form onSubmit={handleAddSkill}>
        <div className="row mt-2">
          <div className="col-sm-9 col-md-10 col-lg-10 col-xl-10 mb-2">
            <input className="form-control" type="text" name="skillName" value={skill} onChange={(e) => setSkill(e.target.value)} />
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
