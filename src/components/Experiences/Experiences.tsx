import Image from "next/image";
import Projects from "@/components/Projects/Projects";

export default function Experiences({isActive}: {isActive: boolean}) {
  return (
    <article className={`portfolio ${isActive? "active" : ""}`}>

      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>


      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">Creative director</h4>

            <span>2015 — Present</span>

            <p className="timeline-text">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
              qvuas
              molestias
              exceptur.
            </p>

          </li>

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">Art director</h4>

            <span>2013 — 2015</span>

            <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
              quas molestias
              exceptur.
            </p>

          </li>

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">Web designer</h4>

            <span>2010 — 2013</span>

            <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
              quas molestias
              exceptur.
            </p>

          </li>

        </ol>

      </section>

      <Projects />


    </article>

  )
}