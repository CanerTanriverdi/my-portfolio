import React from "react";
import arrow from "../assets/icons/arrow.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";
import mail from "../assets/icons/mail.svg";

export default function Footer() {
  return (
    <div className="bg-primary flex flex-col justify-center items-center space-y-5 py-5">
      <div
        className="flex flex-col justify-center items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src={arrow}
          alt="arrow"
        />
        <p className="text-white font-bold text-[9px]">BACK TO TOP</p>
      </div>
      <div className="flex space-x-5">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="linkedin"
            className="w-6 h-6 cursor-pointer"
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagram}
            alt="instagram"
            className="w-6 h-6 cursor-pointer"
          />
        </a>
        <a href="mailto:canertanriverdiis@gmail.com">
          <img
            src={mail}
            alt="mail"
            className="w-6 h-6 cursor-pointer"
          />
        </a>
      </div>
      <div className="text-white font-bold text-xs">@2025 Caner Tanrıverdi All Rights Reserved.</div>
    </div>
  );
}
