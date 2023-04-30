import React, { useEffect, useState } from 'react';

const titles = [
   'Your idea is my web implementation', 
   'Your idea is my web implementation', 
   'Your idea is my web implementation'
];

export const Title = () => {
   const [currentTitle, setCurrentTitle] = useState(titles[0]);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentTitle(currentTitle => {
            const nextIndex = (titles.indexOf(currentTitle) + 1) % titles.length;
            return titles[nextIndex];
         });
      }, 2000);
      return () => clearInterval(intervalId);
   }, []);

   return (
      <div className='hero__title-container'>
         {titles.map((title, index) => (
         <h1 key={index} className='hero__title'>
            {title}
         </h1>
         ))}
         <h2 className='hero__title-second'>Your idea is my web implementation</h2>
      </div>
   );
}