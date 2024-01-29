"use client";

import React, { useState } from "react";
import { MdOutlineAddToPhotos } from "react-icons/md";
import CardPortfolio from "../cardPortfolio/CardPortfolio";
import AddNewPortofilio from "../modal/addNewPortofilio";
const Portofolio = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <CardPortfolio />
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div className="Card d-flex justify-content-center align-items-center" style={{ background: "#CFCFCF", height: "90%", cursor: "pointer" }} onClick={handleShow}>
          <MdOutlineAddToPhotos style={{ height: "100px", color: "gray" }} />
        </div>
        <AddNewPortofilio show={show} onHide={handleClose} />
      </div>
    </div>
  );
};

export default Portofolio;
