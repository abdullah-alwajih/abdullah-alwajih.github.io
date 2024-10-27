import {
  IExperience,
  timelineAcademicExperience,
  timelineWorkExperience
} from "@/app/experiences/components/Experiences/Experiences.mock";
import styles from './Experiences.module.css'


const ExperienceSection = ({title, items}: { title: string; items: IExperience[] }) => (
  <section className={styles.timeline}>
    <div className={styles.titleWrapper}>
      <div className="icon-box">
        <img src="/assets/images/fire.svg" alt="experience" width={20} height={20}/>
      </div>
      <h3 className="h3">{title}</h3>
    </div>
    <ol className={styles.timelineList}>
      {items.map(({title, date, companyName, location, description}, index) => (
        <li className={styles.timelineItem} key={index}>
          <div className="flex justify-between">
            <h4 className={`h4 ${styles.timelineItemTitle}`}>{title}</h4>
            <time dateTime={date}>{date}</time>
          </div>
          <div className="flex justify-between">
            <span className={`h4 ${styles.timelineItemTitle}`}>{companyName}</span>
            <address>{location}</address>
          </div>
          <p className={styles.timelineText}>{description}</p>
        </li>
      ))}
    </ol>
  </section>
);

export default function Experiences({isActive}: { isActive: boolean }) {
  return (
    <article className={`portfolio ${isActive && "active"}`}>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <ExperienceSection title="Work Experience" items={timelineWorkExperience}/>
      <ExperienceSection title="Academic Experience" items={timelineAcademicExperience}/>
    </article>
  );
}