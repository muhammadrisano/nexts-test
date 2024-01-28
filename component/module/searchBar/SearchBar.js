import Button from "@/component/base/button/button";
import React from "react";
import CardList from "../cardList/cardList";
const SearchBar = () => {
  return (
    <div>
      <form className="d-flex align-items-center">
        <input className="form-control form-control-lg" type="search" placeholder="Search for any skill" />
        <Button child="Search" style={{ background: "#5E50A1", color: "white" }} />
      </form>
      <CardList />
    </div>
  );
};

export default SearchBar;
