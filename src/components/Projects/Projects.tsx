"use client";
import React, {useState} from "react";
import Image from "next/image";

const projectData = [{
  id: 1,
  title: "Finance",
  category: "web development",
  src: "/assets/images/project-1.jpg",
  alt: "finance"
}, {id: 2, title: "Orizon", category: "web development", src: "/assets/images/project-2.png", alt: "orizon"}, {
  id: 3,
  title: "Fundo",
  category: "web design",
  src: "/assets/images/project-3.jpg",
  alt: "fundo"
}, {
  id: 4,
  title: "Brawlhalla",
  category: "mobile app",
  src: "/assets/images/project-4.png",
  alt: "brawlhalla"
}, {id: 5, title: "DSM.", category: "web design", src: "/assets/images/project-5.png", alt: "dsm."}, {
  id: 6,
  title: "MetaSpark",
  category: "web design",
  src: "/assets/images/project-6.png",
  alt: "metaspark"
}, {id: 7, title: "Summary", category: "web development", src: "/assets/images/project-7.png", alt: "summary"}, {
  id: 8,
  title: "Task Manager",
  category: "mobile app",
  src: "/assets/images/project-8.jpg",
  alt: "task manager"
}, {id: 9, title: "Arrival", category: "web development", src: "/assets/images/project-9.png", alt: "arrival"},];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isSelectActive, setIsSelectActive] = useState<boolean>(false);

  const filterFunc = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const category = e.currentTarget.innerText.toLowerCase();
    filterFunc(category);
    setIsSelectActive(false); // Close the dropdown after selection
  };

  const toggleSelect = () => {
    setIsSelectActive((prev) => !prev);
  };

  const filteredProjects = projectData.filter((project) => selectedCategory === "all" ? true : project.category === selectedCategory);

  return (<section className="projects">
    <ul className="filter-list">
      {["All", "Web design", "Mobile App", "Web development"].map((category) => (
        <li className="filter-item" key={category}>
          <button
            className={selectedCategory === category.toLowerCase() ? "active" : ""}
            onClick={handleSelect}
          >
            {category}
          </button>
        </li>))}
    </ul>

    <div className="filter-select-box">
      <button className={`filter-select ${isSelectActive ? "active" : ""}`} onClick={toggleSelect}>
        <div className="select-value">{selectedCategory === "all" ? "Select category" : selectedCategory}</div>
        <div className="select-icon">
          <ion-icon name="chevron-down"></ion-icon>
        </div>
      </button>
      {isSelectActive && (<ul className="select-list">
        {["All", "Web design", "Mobile App", "Web development"].map((category) => (
          <li className="select-item" key={category}>
            <button onClick={handleSelect}>{category}</button>
          </li>))}
      </ul>)}
    </div>

    <ul className="project-list">
      {filteredProjects.map((project) => (
        <li className="project-item active" key={project.id} data-category={project.category}>
          <a href="#">
            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <Image src={project.src} width={600} height={450} alt={project.alt} loading="lazy"/>
            </figure>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">{project.category}</p>
          </a>
        </li>))}
    </ul>
  </section>);
}
