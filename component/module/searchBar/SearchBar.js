import Button from "@/component/base/button/button";
import React from "react";
import Card from "../card/Card";
const getDataWorker = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HIRE_JOB_URL}/workers`, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
const SearchBar = async () => {
  const data = await getDataWorker();
  console.log(data);
  console.log(process.env.NEXT_PUBLIC_HIRE_JOB_URL);
  return (
    <div>
      <div className="bg-body-tertiary my-4">
        <form>
          <div className=" row row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 d-flex align-items-center justify-content-center bg-light py-3">
            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <input className="  form-control form-control-lg" type="search" placeholder="Search for any skill" style={{ border: "none" }} />
            </div>
            <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2">
              <select className="  form-select form-select-lg" aria-label="Default select example" style={{ border: "none" }}>
                <option value="">sort</option>
                <option value="1">Sortir berdasarkan nama</option>
                <option value="2">Sortir berdasarkan skill</option>
                <option value="3">Sortir berdasarkan lokasi</option>
                <option value="3">Sortir berdasarkan freelance</option>
                <option value="3">Sortir berdasarkan fulltime</option>
              </select>
            </div>
            <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2">
              <Button className="py-3" child="Search" style={{ background: "#5E50A1", color: "white", width: "100%" }} />
            </div>
          </div>
        </form>
      </div>

      <div>
        {data?.data?.map((item) => (
          <Card key={item.id} name={item.name} src={item.photo} job={item.job_desk || "-"} address={item.domicile || "-"} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
