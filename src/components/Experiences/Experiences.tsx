import Image from "next/image";

export default function Experiences() {
  return (
    <article className="portfolio" data-page="experiences">

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

      <section className="projects">

        <ul className="filter-list">

          <li className="filter-item">
            <button className="active" data-filter-btn>All</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>

        </ul>

        <div className="filter-select-box">

          <button className="filter-select" data-select>

            <div className="select-value" data-selecct-value>Select category</div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>

          </button>

          <ul className="select-list">

            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>

          </ul>

        </div>

        <ul className="project-list">

          <li className="project-item  active" data-filter-item data-category="web development">
            <a href="#">

              <figure className="project-Image">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <Image src="./assets/images/project-1.jpg" width={600} height={450} alt="finance" loading="lazy"/>
              </figure>

              <h3 className="project-title">Finance</h3>

              <p className="project-category">Web development</p>

            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="web development">
            <a href="#">

              <figure className="project-Image">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <Image src="./assets/images/project-2.png" width={600} height={450} alt="orizon" loading="lazy"/>
              </figure>

              <h3 className="project-title">Orizon</h3>

              <p className="project-category">Web development</p>

            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="web design">
            <a href="#">

              <figure className="project-Image">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <Image src="./assets/images/project-3.jpg" width={600} height={450} alt="fundo" loading="lazy"/>
              </figure>

              <h3 className="project-title">Fundo</h3>

              <p className="project-category">Web design</p>

            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="applications">
            <a href="#">

              <figure className="project-Image">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <Image src="./assets/images/project-4.png" width={600} height={450} alt="brawlhalla" loading="lazy"/>
              </figure>

              <h3 className="project-title">Brawlhalla</h3>

              <p className="project-category">Applications</p>

            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="web design">
            <a href="#">

              <figure className="project-Image">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <Image src="./assets/images/project-5.png" width={600} height={450} alt="dsm." loading="lazy"/>
              </figure>

              <h3 className="project-title">DSM.</h3>

              <p className="project-category">Web design</p>

            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="web design">
            <a href="#">

              <figure className="project-Image">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <Image src="./assets/images/project-6.png" width={600} height={450} alt="metaspark" loading="lazy"/>
              </figure>

              <h3 className="project-title">MetaSpark</h3>

              <p className="project-category">Web design</p>

            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="web development">
            <a href="#">

              <figure className="project-Image">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <Image src="./assets/images/project-7.png" width={600} height={450} alt="summary" loading="lazy"/>
              </figure>

              <h3 className="project-title">Summary</h3>

              <p className="project-category">Web development</p>

            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="applications">
            <a href="#">

              <figure className="project-Image">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <Image src="./assets/images/project-8.jpg" width={600} height={450} alt="task manager" loading="lazy"/>
              </figure>

              <h3 className="project-title">Task Manager</h3>

              <p className="project-category">Applications</p>

            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="web development">
            <a href="#">

              <figure className="project-Image">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <Image src="./assets/images/project-9.png" width={600} height={450} alt="arrival" loading="lazy"/>
              </figure>

              <h3 className="project-title">Arrival</h3>

              <p className="project-category">Web development</p>

            </a>
          </li>

        </ul>

      </section>


    </article>

  )
}