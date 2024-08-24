"use client";

import styles from './Navbar.module.css'

import {Dispatch, SetStateAction} from "react";
import {navItems} from "@/components/Navbar/Navbar.mock";

interface NavbarProps {
  activePage: string;
  setActivePage: Dispatch<SetStateAction<string>>;
}

export default function Navbar({activePage, setActivePage}: NavbarProps) {

  const handleClick = (page: string) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  return (

    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          {navItems.map((item, index) => (<li className="navbar-item" key={index}>
              <button
                className={`${styles.navbarLink} ${activePage === item.name && styles.active}`}
                onClick={() => handleClick(item.name)}
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </button>
            </li>))}
        </ul>
      </nav>

      <div className="container">
        <div className={styles.navigation}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className={`${styles.list} ${activePage === item.name && styles.active}`}>
                <button onClick={() => handleClick(item.name)}>
            <span className={styles.icon}
            dangerouslySetInnerHTML={{__html: item.icon(activePage === item.name ? 'black' : '#FFDB6E')}}/>

                </button>
              </li>))}
            <div className={styles.indicator}></div>
          </ul>
        </div>
      </div>
    </>);
}
