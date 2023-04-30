import React from 'react';
import { Title } from '../components/Title';


export const Main = () => {
   return (
      <div className='main'>
         <Title/>
         <div className="container">
            <div className="hero">
               <div className="hero__promo">
                  <video autoPlay muted loop>
                     <source src="/video/quco com ua promo video.mp4" type="video/mp4" />
                     Your browser does not support the video tag.
                  </video>
               </div>
            </div>
         </div>
      </div>
   );
}
