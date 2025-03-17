import React from "react";
import separator from "../assets/icons/separator.svg";

export default function Separator() {
  return (
    <div className="flex items-center justify-center h-60">
      <img
        src={separator}
        alt="separator"
      />
    </div>
  );
}
