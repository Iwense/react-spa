import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
   return (

      <nav className="sidebar__nav">
         <div className="sidebar__link-wrapper">
            <NavLink className="sidebar__link" to="/profile">Profile</NavLink>
            <NavLink className="sidebar__link" to="/dialogs">Messages</NavLink>
            <NavLink className="sidebar__link" to="/users">Users</NavLink>
            <NavLink className="sidebar__link" to="/news">News</NavLink>
            <NavLink className="sidebar__link" to="/settings">Settings</NavLink>

         </div>
      </nav>


   )
}


export default Navbar;