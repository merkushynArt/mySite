import React, { useState } from 'react';
import { HiCode } from "react-icons/hi";
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
   const [isActive, setIsActive] = useState(false);

   const navbarClick = () => {
      setIsActive(!isActive);
   }

   return (
      <div className="container">
         <header className={`header ${isActive ? 'active' : ''}`}>
            <Link className="logo" to={'/'}>
               <HiCode/>
            </Link>

            <div className='header__list'>
               <NavLink className='header__list-item' to={'/'}>
                  <span className='header__list-item--1'>Main</span>
                  <span className='header__list-item--2'>Main</span>
               </NavLink>
               <NavLink className='header__list-item' to={"aboutme"}>
                  <span className='header__list-item--1'>About me</span>
                  <span className='header__list-item--2'>About me</span>
               </NavLink>
               <NavLink className='header__list-item' to={"portfolio"}>
                  <span className='header__list-item--1'>Portfolio</span>
                  <span className='header__list-item--2'>Portfolio</span>
               </NavLink>
               <NavLink className='header__list-item' to={"contacts"}>
                  <span className='header__list-item--1'>Contacts</span>
                  <span className='header__list-item--2'>Contacts</span>
               </NavLink>
            </div>

            <button className={`navbar ${isActive ? 'active' : ''}`} onClick={navbarClick}></button>
         </header>
      </div>
   );
}
