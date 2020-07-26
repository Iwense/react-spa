import React from 'react';


const Sidebar = () => {
   return (
      <nav className="sidebar">
         <div className="sidebar__link-wrapper">
            <a className="sidebar__link" href="#">Profile</a>
            <a className="sidebar__link" href="#">Messages</a>
            <a className="sidebar__link" href="#">News</a>
            <a className="sidebar__link" href="#">Settings</a>
         </div>
      </nav>
   )
}


export default Sidebar;