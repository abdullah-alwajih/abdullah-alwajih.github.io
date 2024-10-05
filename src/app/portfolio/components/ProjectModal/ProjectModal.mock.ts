export interface IProject {
  id: string;
  title: string;
  src: string;
  category: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface ModalProps {
  isActive: boolean;
  onClose: () => void;
  project: IProject;
}