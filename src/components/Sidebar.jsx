import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
   return (
      <nav className="sidebar">
         <div className="sidebar__link-wrapper">
            <NavLink className="sidebar__link" to="/profile">Profile</NavLink>
            <NavLink className="sidebar__link" to="/dialogs">Messages</NavLink>
            <NavLink className="sidebar__link" to="/news">News</NavLink>
            <NavLink className="sidebar__link" to="/settings">Settings</NavLink>
         </div>
      </nav>
   )
}


export default Sidebar;