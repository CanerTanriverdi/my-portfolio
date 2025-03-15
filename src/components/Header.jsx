import React from "react";
import logo from "../assets/icons/logo.svg";

export default function Header() {
  return (
    <header className="bg-transparent flex justify-around h-32 items-center w-screen fixed z-20">
      <div>
        <img
          src={logo}
          alt="logo"
        />
      </div>
      <nav>
        <ul className="flex space-x-12 font-bold">
          <li>
            <a
              href="#"
              className="hover:text-accent text-secondary duration-300"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-accent  text-secondary duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-accent  text-secondary duration-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="  text-primary hover:text-secondary border-2 border-secondary px-6 py-2 rounded-full bg-secondary hover:bg-accent transition duration-300"
            >
              CONTACT ME
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
