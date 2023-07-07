import React from 'react';
import { Title } from '../components/Title';


export const Main = () => {
   return (
      <div className='main'>
         <Title/>
         <div className="container">
            <section className="hero">
               <div className="hero__promo">
                  <video autoPlay muted loop>
                     <source src="/video/quco com ua promo video.mp4" type="video/mp4" />
                     Your browser does not support the video tag.
                  </video>
               </div>

               <div className="hero-text">
                  I am a web developer focused on creating web applications that enhance the user experience. My goal is to develop intuitive interfaces that simplify people's lives and improve their online interactions. I strive for innovation and the creation of high-performance web solutions that help businesses achieve their objectives. My passion for web development enables me to create web projects that make the internet more appealing and functional for everyone.
               </div>
            </section>
         </div>
      </div>
   );
}
