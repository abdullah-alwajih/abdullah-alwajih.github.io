import React from 'react';
import styles from './ProjectModal.module.css';
import {ModalProps} from "@/app/portfolio/components/ProjectModal/ProjectModal.mock";


const Modal: React.FC<ModalProps> = ({isActive, onClose, project}) => {
  if (!isActive) return null;

  return (
    <div className={`${styles.modalContainer} ${isActive ? styles.active : ''}`}>
      <div className={`${styles.overlay} ${styles.active}`} onClick={onClose}></div>
      <section className={styles.projectModal}>
        <button className={styles.modalCloseBtn} onClick={onClose}>
          {/* يمكنك إضافة أيقونة إغلاق هنا */}
        </button>

        <div className={styles.modalContent}>
          <img
            src={project.src}
            alt={project.title}
            width={600}
            height={450}
            className={styles.projectImage}
          />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className={styles.technologies}>
            <h3>Technologies Used:</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
            <button className="form-btn" type="submit">
              <img src="/assets/images/send.svg" alt="send" width={20} height={20}/>
              <span>Send Message</span>
            </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;