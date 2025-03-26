import React, { useState, useEffect } from "react";
import logo from "../assets/icons/logo.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Son kaydırma pozisyonu
  const [scrollingDown, setScrollingDown] = useState(false); // Aşağı kaydırma durumu

  useEffect(() => {
    const handleScroll = () => {
      // Sayfa yukarı kaydırılıyorsa
      if (window.scrollY > 150) {
        if (window.scrollY > lastScrollY) {
          // Kullanıcı aşağı kaydırıyorsa
          setScrollingDown(true);
        } else {
          // Kullanıcı yukarı kaydırıyorsa
          setScrollingDown(false);
        }
        setScrolled(true);
      } else {
        setScrolled(false);
        setScrollingDown(false);
      }

      // Kaydırma pozisyonunu güncelle
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`flex justify-around h-28 items-center w-screen fixed z-20 duration-300 
        ${scrolled ? (scrollingDown ? "translate-y-[-100%]" : "translate-y-0") : "bg-transparent text-secondary"} 
        ${scrolled ? "bg-primary/50 text-white" : "bg-transparent text-secondary"} 
        hover:bg-primary/50 transition-transform`}
    >
      <div>
        <img
          src={logo}
          alt="logo"
        />
      </div>
      <nav>
        <ul className="flex space-x-10 font-bold">
          <li>
            <a
              href="#"
              className="hover:text-accent duration-300"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-accent duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-accent duration-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-primary hover:text-secondary border-2 border-secondary px-5 py-2 rounded-full bg-secondary hover:bg-accent transition duration-300"
            >
              CONTACT ME
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
