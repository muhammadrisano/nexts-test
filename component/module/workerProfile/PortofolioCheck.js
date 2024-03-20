"use client"
import React, { useState, useEffect } from "react";
import CardPortfolio from "../cardPortfolio/CardPortfolio";
import {  getPortfolioById } from "@/service/portfolio";

const Portofolio = ({id}) => {
console.log("id user", id)
const [portfolio, setPortfolio] = useState([])
 const fetchPortfolioById = async () => {
  try {
    const data = await getPortfolioById(id)
setPortfolio(data)
  } catch (error) {
    console.log(error)
  }
 }
 useEffect(() => {
  fetchPortfolioById()
 }, [])
  return (
    <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
      {portfolio.map((item) => (
        <CardPortfolio key={item.id} src={item.image} name={item.application_name}>
         
        </CardPortfolio>
      ))}

      
    </div>
  );
};

export default Portofolio;
