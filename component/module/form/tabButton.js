"use client";

import { useTransition } from "react";
import style from "./tabButton.module.css";
export default function TabButton({ children, isActive, onClick }) {
  if (isActive) {
    return <button className={` btn  ${style.btn}`}>{children}</button>;
  }
  return (
    <button
      className={`btn text-secondary btn-outline-light `}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}
