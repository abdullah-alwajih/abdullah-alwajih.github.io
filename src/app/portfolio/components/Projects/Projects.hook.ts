import {useState} from 'react';
import {platforms, projectData} from "@/app/portfolio/components/Projects/Projects.mock";
import {IProject} from "@/app/portfolio/components/ProjectModal/ProjectModal.mock";

export const useProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isSelectActive, setIsSelectActive] = useState<boolean>(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeProject, setActiveProject] = useState<IProject | null>(null);

  const filterFunc = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSelect = (category: string) => {
    filterFunc(category);
    setIsSelectActive(false);
  };

  const toggleSelect = () => setIsSelectActive((prev) => !prev);

  const toggleModal = () => setIsModalActive(!isModalActive);

  const filteredProjects = projectData.filter((project) => 
    selectedCategory === "all" ? true : project.category === selectedCategory
  );

  const handleProjectClick = (project: IProject) => {
    // setActiveProject(project);
    // toggleModal();
  };

  return {
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
  };
};