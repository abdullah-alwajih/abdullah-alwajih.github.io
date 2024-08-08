import Image from "next/image";

export default function Services() {
  return (<section className="service">

      <h3 className="h3 service-title">What im doing</h3>

      <ul className="service-list">

        <li className="service-item">

          <div className="service-icon-box">
            <Image src="/assets/images/icon-app.svg" alt="mobile app icon" width="40" height={40}/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Mobile apps</h4>

            <p className="service-item-text">
              Professional development of applications for iOS and Android.
            </p>
          </div>

        </li>
        <li className="service-item">

          <div className="service-icon-box">
            <Image src="/assets/images/icon-design.svg" alt="design icon" width="40" height={40}/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web design</h4>

            <p className="service-item-text">
              The most modern and high-quality design made at a professional level.
            </p>
          </div>

        </li>

        <li className="service-item">

          <div className="service-icon-box">
            <Image src="/assets/images/icon-dev.svg" alt="Web development icon" width="40" height={40}/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web development</h4>

            <p className="service-item-text">
              High-quality development of sites at the professional level.
            </p>
          </div>

        </li>


        <li className="service-item">

          <div className="service-icon-box">
            <Image src="/assets/images/icon-photo.svg" alt="camera icon" width="60" height={60}/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Penetration Testing</h4>

            <p className="service-item-text">
              I thoroughly test applications and websites from creation to ensure top security.
            </p>
          </div>

        </li>

      </ul>

    </section>);
}