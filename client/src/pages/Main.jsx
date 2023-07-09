import React from 'react';
import { Title } from '../components/Title.jsx';
import { Button } from '../components/Button.jsx';


const words1 = [
   'Your idea is my web implementation', 
   'Your idea is my web implementation',
   'Your idea is my web implementation'
];

const wordsPortfolio = [
   'Gallery of my developments and code solutions',
   'Gallery of my developments and code solutions',
   'Gallery of my developments and code solutions',
   'Gallery of my developments and code solutions'
]
/*
   'Overview of my code achievements and implementations',
   'Portfolio showcasing my skills and implementation of my work',
*/

export const Main = () => {
   return (
      <div className='main'>
         <Title words={words1} />

         <div className="hero">
            <div className="hero__promo">
               <video autoPlay muted loop>
                  <source src="/video/quco com ua promo video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
            </div>

            <div className="hero-text">
               I am a web developer focused on creating web applications that enhance the user experience. My goal is to develop intuitive interfaces that simplify people's lives and improve their online interactions. I strive for innovation and the creation of high-performance web solutions that help businesses achieve their objectives. My passion for web development enables me to create web projects that make the internet more appealing and functional for everyone.
            </div>
         </div>

         <section className='main-portfolio'>
            <h3 className='title tr'>Recent Works</h3>
            <div class="grid-container">
               <div class="grid-item"></div>
               <div class="grid-item"></div>
               <div class="grid-item"></div>
               <div class="grid-item"></div>
               <div class="grid-item"></div>
               <div class="grid-item"></div>
            </div>
         </section>
         <Button words={wordsPortfolio}/>

         <section></section>
      </div>
   );
}
