import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ words }) => {
   const [currentWordIndex, setCurrentWordIndex] = useState(0);
   const currentWord = words[currentWordIndex];

   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
      }, 2000);
      return () => clearInterval(intervalId);
   }, [words]);

   return (
      <div className='button-anim'>
         <div className='button-container'>
            {words.map((word, index) => (
               <h3 key={index} className='button__title'>
                  {word}
               </h3>
            ))}
            <h3 className='button__title-second'>{currentWord}</h3>
         </div>
         <Link className="button__link" to={'/'}>
            <div className="button__link-word">
               Show <br/>more
            </div>
         </Link>
      </div>
   );
};