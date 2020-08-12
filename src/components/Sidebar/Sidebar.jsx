import React from 'react';
import Friends from './Friends/Friends';
import Navbar from './Navbar/Navbar';


const Sidebar = (props) => {
   return (
      <div className="sidebar">

         <Navbar />

         <div className="friends">
            <Friends state={props.state} />
         </div>

      </div>
   )
}


export default Sidebar;