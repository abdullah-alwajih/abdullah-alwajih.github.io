import Image from "next/image";

export default function Sidebar() {
  return (<aside className="sidebar" data-sidebar>
    <div className="sidebar-info">
      <figure className="avatar-box">
        <Image

          src="./assets/images/test.svg" priority
          alt="Richard hanrick" width="80" height={80}/>
      </figure>
      <div className="info-content">
        <h1 className="name" title="">Abdullah AL-Wajih</h1>
        <p className="title">Software Engineer</p>
      </div>
      <button className="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>
    <div className="sidebar-info_more">
      <div className="separator"></div>
      <ul className="contacts-list">
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Email</p>
            <a href=".mailto:Pro.Abdullah.AlWajih@gmail.com" className="contact-link">Pro.Abdullah.AlWajih</a>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Phone</p>
            <a href=".tel:+966500608507" className="contact-link">+966 500 608 507</a>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Location</p>
            <address>Saudi Arabia’s, Riyadh</address>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Education</p>
            <time dateTime="1998-04-18">Bachelor Computer Science</time>
          </div>
        </li>
      </ul>
      <div className="separator"></div>
      <ul className="social-list">
        <li className="social-item">
          <a href=".https://github.com/abdullah-alwajih" target='_blank' className="social-link">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li className="social-item">
        <a href=".https://www.linkedin.com/in/abdullah-alwajih" target='_blank' className="social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  </aside>)
}