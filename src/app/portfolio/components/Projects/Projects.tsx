"use client";
import React, {useState} from "react";
import {platforms, projectData} from "@/app/portfolio/components/Projects/Projects.mock";
import styles from './Projects.module.css'


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
    <ul className={styles.filterList}>
      {platforms.map((category) => (
        <li className={styles.filterItem} key={category}>
          <button
            className={selectedCategory === category.toLowerCase() ? "active" : ""}
            onClick={handleSelect}
          >
            {category}
          </button>
        </li>))}
    </ul>

    <div className={styles.filterSelectBox}>
      <button className={`${styles.filterSelect}  ${isSelectActive && styles.active}`} onClick={toggleSelect}>
        <div className="select-value">{selectedCategory === "all" ? "Select category" : selectedCategory}</div>
        <div className={styles.selectIcon}>
          <img
            src="/assets/images/chevron-down.svg"
            alt="chevron down" width="20" height="20"/>
          {/* color svg required white  */}


        </div>
      </button>
      {isSelectActive && (<ul className={styles.selectList}>
        {platforms.map((category) => (
          <li className={styles.selectItem} key={category}>
            <button onClick={handleSelect}>{category}</button>
          </li>))}
      </ul>)}
    </div>

    <ul className={styles.projectList}>
      {filteredProjects.map((project) => (
        <li className={`${styles.projectItem} ${styles.active}`} key={project.id} data-category={project.category}>
          <a href="#">
            <figure className={styles.projectImg}>
              <div className={styles.projectItemIconBox}>
                <img src="/assets/images/eye.svg" alt="eye" width={20} height={20}/>
              </div>
              <img src={project.src} width={600} height={450} alt={project.alt} loading="lazy"/>
            </figure>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectCategory}>{project.category}</p>
          </a>
        </li>))}
    </ul>
  </section>);
}