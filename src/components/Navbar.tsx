"use client";
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  activePage: string;
  setActivePage: Dispatch<SetStateAction<string>>;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const pages = ["about", "experiences", "skills", "contact"];

  const handleClick = (page: string) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map((page, index) => (
          <li className="navbar-item" key={index}>
            <button
              className={`navbar-link ${activePage === page ? "active" : ""}`}
              onClick={() => handleClick(page)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
