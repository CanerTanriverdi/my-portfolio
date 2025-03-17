import React from "react";
import arrow from "../assets/icons/arrow.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";
import mail from "../assets/icons/mail.svg";
import SocialLinks from "./SocialLinks";

const footerLinks = [
  { id: "linkedin", url: "https://www.linkedin.com/", icon: linkedin },
  { id: "instagram", url: "https://www.instagram.com/", icon: instagram },
  { id: "mail", url: "mailto:canertanriverdiis@gmail.com", icon: mail },
];

export default function Footer() {
  return (
    <div className="bg-primary flex flex-col justify-center items-center space-y-5 py-10">
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
      <SocialLinks
        links={footerLinks}
        containerClass="flex space-x-5"
        iconClass="w-6 h-6 cursor-pointer"
      />
      <div className="text-white font-bold text-xs">@2025 Caner Tanrıverdi All Rights Reserved.</div>
    </div>
  );
}
