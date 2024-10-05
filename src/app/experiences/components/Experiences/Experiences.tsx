import {
  timelineAcademicExperience,
  timelineWorkExperience
} from "@/app/experiences/components/Experiences/Experiences.mock";

export default function Experiences({isActive}: { isActive: boolean }) {
  return (<article className={`portfolio ${isActive ? "active" : ""}`}>

    <header>
      <h2 className="h2 article-title">Resume</h2>
    </header>

    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <img src="/assets/images/fire.svg" alt="experience" width={20} height={20}/>
        </div>
        <h3 className="h3">Work Experience</h3>
      </div>
      <ol className="timeline-list">
        {timelineWorkExperience.map((item, index) => (
          <li className="timeline-item" key={index}>
            <div className="flex justify-between">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <time dateTime={item.date}>{item.date}</time>
            </div>
            <div className="flex justify-between">
              <span className="h4 timeline-item-title">{item.companyName}</span>
              <address >{item.location}</address>
            </div>
            <p className="timeline-text">{item.description}</p>
          </li>)
        )
        }

      </ol>
    </section>

    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <img src="/assets/images/fire.svg" alt="experience" width={20} height={20}/>
        </div>
        <h3 className="h3">Academic Experience</h3>
      </div>
      <ol className="timeline-list">
        {timelineAcademicExperience.map((item, index) => (<li className="timeline-item" key={index}>
          <div className="flex justify-between">
            <h4 className="h4 timeline-item-title">{item.title}</h4>
            <time dateTime={item.date}>{item.date}</time>
          </div>
          <div className="flex justify-between">
            <span className="h4 timeline-item-title">{item.companyName}</span>
            <address>{item.location}</address>
          </div>
          <p className="timeline-text">{item.description}</p>
        </li>))}
      </ol>
    </section>
  </article>)
}