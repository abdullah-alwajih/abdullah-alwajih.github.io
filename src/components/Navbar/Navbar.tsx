"use client";

import styles from './Navbar.module.css'

import {navItems} from "@/components/Navbar/Navbar.mock";
import { usePathname } from 'next/navigation';
import Link from "next/link";


export default function Navbar() {
  const pathname = usePathname();



  return (

    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          {navItems.map((item, index) => (<li className="navbar-item" key={index}>
              <Link

                href={item.path}
                className={`${styles.navbarLink} ${styles.link} ${pathname === item.path && styles.active}`}
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            </li>))}
        </ul>
      </nav>

      <div className="container">
        <div className={styles.navigation}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className={`${styles.list} ${pathname === item.path && styles.active}`}>
               <Link
                 className={styles.link}
                href={item.path}>
            <span className={styles.icon}
            dangerouslySetInnerHTML={{__html: item.icon(pathname === item.path ? 'black' : '#FFDB70')}}/>

                </Link>
              </li>))}
            <div className={styles.indicator}></div>
          </ul>
        </div>
      </div>
    </>);
}
