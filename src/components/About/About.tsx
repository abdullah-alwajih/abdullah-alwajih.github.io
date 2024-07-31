import Services from "@/components/Services/Services";


export default function About({isActive}: { isActive: boolean }) {
  return (<article className={`about ${isActive ? "active" : ""}`}>

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a software engineer, a passionate developer, I love designing applications and solving problems
          creatively. With my extensive experience as a Senior Flutter & Angular Developer, Full Stack Developer, and
          Penetration Tester, I thrive on the challenges of creating efficient and secure software solutions.
        </p>
        <p>
          I served as a Full-Stack Developer, where I engineered various applications from scratch, managed team
          projects, and optimized both security and performance. Notable projects include the UNICEF Humanitarian
          Transfers App, Natco Power E-Commerce App, and the Floassk App for money transactions. I also contributed to
          training university trainees on Flutter UI concepts and state management.
        </p>
      </section>

      <Services/>


    </article>);
}
