"use client";

import Image from "next/image";
import {useState} from "react";
import styles from './Sidebar.module.css'
import {contacts, socialLinks} from "@/components/Sidebar/Sidebar.mock";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <aside className={`${styles.sidebar}  ${isActive && styles.active}`}>
      <div className={styles.sidebarInfo}>
        <figure className={styles.avatarBox}>
          <Image
            src="/assets/images/test.svg" priority
            alt="Richard hanrick" width="80" height={80}/>
        </figure>
        <div className={styles.infoContent}>
          <h1 className={styles.name} title="">Abdullah AL-Wajih</h1>
          <p className={styles.title}>Software Engineer</p>
        </div>
        <button className={styles.infoMoreBtn} onClick={handleToggle}>
          <span>Show Contacts</span>
         <img
            src="/assets/images/chevron-down.svg"
            alt="chevron down" width="22" height={22}/>
        </button>
      </div>
      <div className={styles.sidebarInfoMore}>
        <div className="separator"></div>
        <ul className={styles.contactsList}>
          {contacts.map((contact, index) => (
            <li key={index} className={styles.contactItem}>
              <div className="icon-box">
                <Image src={contact.icon} alt={contact.icon} width={20} height={20}/>
              </div>
              <div className={styles.contactInfo}>
                <p className={styles.contactTitle}>{contact.title}</p>
                {contact.link ? (
                  <a href={contact.link} className={styles.contactLink}>
                    {contact.displayText}
                  </a>
                ) : contact.address ? (
                  <address>{contact.address}</address>
                ) : (
                  <time dateTime={contact.time}>{contact.displayText}</time>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="separator"></div>
        <ul className={styles.socialList}>
          {socialLinks.map((social, index) => (
            <li key={index} className={styles.socialItem}>
              <a href={social.link} target="_blank" className={styles.socialLink} rel="noopener noreferrer">
                <ion-icon name={social.icon}></ion-icon>
              </a>
            </li>
          )
          )}
        </ul>
      </div>
    </aside>
  )
}