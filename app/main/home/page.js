import SearchBar from "@/component/module/searchBar/SearchBar";
import React from "react";

const Home = () => {
  return (
    <main>
      <div className="container-fluid" style={{ background: "#5E50A1", marginTop: "60px" }}>
        <h4 className="text-light py-3 ms-5">Tob Jobs</h4>
      </div>
      <div className="container">
        <SearchBar />
      </div>
    </main>
  );
};

export default Home;
