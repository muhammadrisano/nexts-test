import Input from "@/component/base/input/input";
import React from "react";

const EditForm = () => {
  return (
    <div>
      <div>
        <h4>Data diri</h4>
        <hr />
        <Input className="form-control" type="text" name="name" label="Nama Lengkap" placeholder="Masukkan nama lengkap" id="name" />
        <Input className="form-control" type="text" name="jobDesc" label="Job Desk." placeholder="Masukkan Job Desk." id="jobDesc" />
        <Input className="form-control" type="text" name="address" label="Domisili" placeholder="Masukkan Domisili" id="address" />
        <Input className="form-control" type="text" name="companyAddress" label="Tempat Kerja" placeholder="Masukkan tempat kerja" id="companyAddress" />
        <label className="form-label mt-4" htmlFor="desc" style={{ color: "#9EA0A5" }}>
          Deskrpsi Singkat
        </label>
        <textarea id="desc" className="form-control" placeholder="Masukkan deskripsi singkat"></textarea>
      </div>
    </div>
  );
};

export default EditForm;
