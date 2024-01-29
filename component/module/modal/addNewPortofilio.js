import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@/component/base/button/button";
import Input from "@/component/base/input/input";
import { MdCloudUpload } from "react-icons/md";
const AddNewPortofilio = (props) => {
  const { show, onHide } = props;

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Portofolio</Modal.Title>
          <hr />
        </Modal.Header>
        <Modal.Body>
          <Input className="form-control " type="text" label="Nama aplikasi" placeholder="Masukkan nama aplikasi" name="aplicationName" />
          <Input className="form-control " type="text" label="Link repository" placeholder="Masukkan link repository" name="linkRepository" />
          <p className="mt-4" style={{ color: "#9EA0A5" }}>
            Type portofolio
          </p>
          <div className="form-check form-check-inline ">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Aplikasi Mobile
            </label>
          </div>
          <div className=" form-check form-check-inline">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Aplikasi Web
            </label>
          </div>
          <div className="container mt-3 d-flex justify-content-center" style={{ border: "1px dashed #9EA0A5", cursor: "pointer" }}>
            <div className="d-block justify-content-center my-3" style={{ color: "#9EA0A5" }}>
              <MdCloudUpload style={{ width: "100%", height: "50px" }} />
              <p className="text-center">
                Drag & Drop untuk Upload Gambar Aplikasi Mobile
                <br />
                <small>Atau cari untuk mengupload file dari direktorimu.</small>
              </p>
            </div>

            <Input hidden />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button child="Close" style={{ color: "#5E50A1", backgroundColor: "white", border: "1px solid #5E50A1 " }} onClick={onHide} />
          <Button child="Save" style={{ color: "white", backgroundColor: "#5E50A1" }} onClick={onHide} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewPortofilio;
