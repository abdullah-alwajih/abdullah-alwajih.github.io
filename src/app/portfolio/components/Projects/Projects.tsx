"use client";
import React, {useState} from "react";
import {platforms, projectData} from "@/app/portfolio/components/Projects/Projects.mock";


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
      {platforms.map((category) => (
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
          <img
            src="/assets/images/chevron-down.svg"
            alt="chevron down" width="20" height="20"/>
          {/* color svg required white  */}


        </div>
      </button>
      {isSelectActive && (<ul className="select-list">
        {platforms.map((category) => (
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
                <img src="/assets/images/eye.svg" alt="eye" width={20} height={20}/>
              </div>
              <img src={project.src} width={600} height={450} alt={project.alt} loading="lazy"/>
            </figure>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">{project.category}</p>
          </a>
        </li>))}
    </ul>
  </section>);
}
