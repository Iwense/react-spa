import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
   return (
      <header className="header">
         <img className="logo" src="https://www.cherryshop.ru/wp-content/uploads/2020/03/%D0%B3%D0%B0%D0%BB%D0%BA%D0%B0.png" alt="Logo" />
         <div className={style.auth}>
            {props.isAuth ? <NavLink to={'/login'} >{props.login}</NavLink>
               : <NavLink to={'/login'} >Login</NavLink>}

         </div>
      </header>
   )
}


export default Header;