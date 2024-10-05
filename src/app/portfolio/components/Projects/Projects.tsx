"use client";
import React from "react";
import styles from './Projects.module.css'
import Modal from "@/app/portfolio/components/ProjectModal/ProjectModal";
import {useProjects} from "@/app/portfolio/components/Projects/Projects.hook";


export default function Projects() {
  const {
    selectedCategory,
    isSelectActive,
    isModalActive,
    activeProject,
    filteredProjects,
    platforms,
    handleSelect,
    toggleSelect,
    toggleModal,
    handleProjectClick,
  } = useProjects();

  return (<>
    <section className="projects">
      <ul className={styles.filterList}>
        {platforms.map((category) => (<li className={styles.filterItem} key={category}>
          <button
            className={`${selectedCategory === category.toLowerCase() && styles.active}`}
            onClick={() => handleSelect(category.toLowerCase())}
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
        {
          isSelectActive && (
            <ul className={styles.selectList}>
              {platforms.map((category) => (<li className={styles.selectItem} key={category}>
                <button
                  className={selectedCategory === category.toLowerCase() ? "active" : ""}
                  onClick={() => handleSelect(category.toLowerCase())}
                >{category}</button>
              </li>))}
            </ul>)
        }

      </div>

      <ul className={styles.projectList}>
        {filteredProjects.map((project) => (
          <li className={`${styles.projectItem} ${styles.active}`}
              key={project.id}
              onClick={() => handleProjectClick(project)}
          >
            <a href="#">
              <figure className={styles.projectImg}>
                <div className={styles.projectItemIconBox}>
                  <img src="/assets/images/eye.svg" alt="eye" width={20} height={20}/>
                </div>
                <img src={project.src} width={600} height={450} alt={project.title} loading="lazy"/>
              </figure>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectCategory}>{project.category}</p>
            </a>
          </li>))}
      </ul>
    </section>

    {activeProject && (<Modal
      isActive={isModalActive}
      onClose={toggleModal}
      project={activeProject}
    />)}
  </>);
}