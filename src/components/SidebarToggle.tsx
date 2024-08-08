import { useState } from 'react';

const SidebarToggle = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button className={`info_more-btn ${isActive ? 'active' : ''}`} onClick={handleToggle} data-sidebar-btn>
        <span>Show Contacts</span>
            <ion-icon name="mail-outline"></ion-icon>
      </button>
      <div className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
        {/* Sidebar content goes here */}
      </div>
    </>
  );
};

export default SidebarToggle;
