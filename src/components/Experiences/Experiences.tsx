import {timelineAcademicExperience, timelineWorkExperience} from "@/components/Experiences/Experiences.mock";

export default function Experiences({isActive}: { isActive: boolean }) {
  return (
    <article className={`portfolio ${isActive ? "active" : ""}`}>

      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Work Experience</h3>
        </div>
        <ol className="timeline-list">
          {timelineWorkExperience.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.date}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Academic Experience</h3>
        </div>
        <ol className="timeline-list">
          {timelineAcademicExperience.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.date}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  )
}