import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const PortfolioBlock = ({ imgUrl, portfolioTitle, portfolioLink }) => {
   const [isHovered, setIsHovered] = useState(false);
   const [position, setPosition] = useState({ x: 0, y: 0 });

   const handleMouseEnter = (event) => {
      setIsHovered(true);
   };

   const handleMouseMove = (event) => {
      const blockRect = event.target.getBoundingClientRect();
      const circleSize = 100;
      const circleX = event.clientX - blockRect.left - circleSize / 2;
      const circleY = event.clientY - blockRect.top - circleSize / 2;

      setPosition({
         x: circleX,
         y: circleY
      });
   };

   const handleMouseLeave = () => {
      setIsHovered(false);
   };

   const circleStyle = {
      left: position.x,
      top: position.y
   };

   return (
      <div
         className='portfolio__item'
         onMouseEnter={handleMouseEnter}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         >
         <Link className='portfolio__item-link' to={portfolioLink}></Link>
            {isHovered && 
               <div className={`portfolio__item-circle ${isHovered ? 'fade-in' : 'fade-out'}`} style={circleStyle}>
                  <div className='portfolio__item-circle-text'>
                     click<br/>here
                  </div>
               </div>
            }
            <div className="portfolio__item-img">
               <img src={imgUrl} alt="img" />
            </div>
            <div className="portfolio__item-text">
               {portfolioTitle}
            </div>
         
      </div>
   );
};





/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const PortfolioBlock = ({ imgUrl, portfolioTitle, portfolioLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseMove = (event) => {
    const circleSize = 100;
    const circleX = event.clientX - circleSize / 2;
    const circleY = event.clientY - circleSize / 2;

    setPosition({
      x: circleX,
      y: circleY
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const circleStyle = {
    left: position.x + 'px',
    top: position.y + 'px',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease'
  };

  return (
    <div
      className='portfolio__item'
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link className='portfolio__item-link' to={portfolioLink}></Link>
      <div className='portfolio__item-circle' style={circleStyle}>
        <div className='portfolio__item-circle-text'>
          click<br />here
        </div>
      </div>
      <div className="portfolio__item-img">
        <img src={imgUrl} alt="img" />
      </div>
      <div className="portfolio__item-text">
        {portfolioTitle}
      </div>
    </div>
  );
};*/



