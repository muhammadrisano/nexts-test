"use client";

import { useTransition } from "react";

export default function TabButton({ children, isActive, onClick }) {
  if (isActive) {
    return <b>{children}</b>;
  }
  return (
    <button
      className="btn btn-warning text-light"
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}
