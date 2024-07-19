import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import About from "@/components/About/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences/Experiences";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (

    <main>


      <Sidebar/>


      <div className="main-content">


        <Navbar/>


        <About/>


        <Experiences/>

      <Skills />


        <Contact/>
      </div>

    </main>
  );
}
