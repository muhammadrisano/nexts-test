import React from "react";
import Image from "next/image";
import image from "@/public/images/tokopedia.svg?url";
const CardExp = () => {
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3 d-flex justify-content-center">
            <Image src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h4 className="card-title">Engineer</h4>
              <h6>Tokopedia</h6>
              <p className="card-subtitle text-body-secondary">
                July 2019 - January 2020 <span>6 months</span>
              </p>
              <p className="card-text mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExp;
