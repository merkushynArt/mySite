import React from 'react';
import { Title } from '../components/Title.jsx';
import { Button } from '../components/Button.jsx';
import { PortfolioBlock } from '../components/PortfolioBlock.jsx';
import { FaCss3, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { Posts } from '../components/Posts.jsx';

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
];

const wordsBlog = [
   'In free access: My thoughts',
   'In free access: My thoughts',
   'In free access: My thoughts',
   'In free access: My thoughts'
]


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
            <div className="container">
               <h3 className='title tr'>Recent Works</h3>
               <div className='main-portfolio__container'>
                  <PortfolioBlock 
                     imgUrl={'https://advanced.team//assets/components/phpthumbof/cache/00ae9372e92edde76fd344b72941ad6e.708dfb4c78bcc48411d04e8173ee5f94.jpg'} 
                     portfolioTitle={'Depositphotos. Evolutione.'}
                     portfolioLink={'/portfolio'}
                  />
                  <PortfolioBlock 
                     imgUrl={'https://advanced.team//assets/components/phpthumbof/cache/00ae9372e92edde76fd344b72941ad6e.708dfb4c78bcc48411d04e8173ee5f94.jpg'} 
                     portfolioTitle={'Depositphotos. Evolutione.'}
                     portfolioLink={'/portfolio'}
                  />
                  <PortfolioBlock 
                     imgUrl={'https://advanced.team//assets/components/phpthumbof/cache/00ae9372e92edde76fd344b72941ad6e.708dfb4c78bcc48411d04e8173ee5f94.jpg'} 
                     portfolioTitle={'Depositphotos. Evolutione.'}
                     portfolioLink={'/portfolio'}
                  />
                  <PortfolioBlock 
                     imgUrl={'https://advanced.team//assets/components/phpthumbof/cache/00ae9372e92edde76fd344b72941ad6e.708dfb4c78bcc48411d04e8173ee5f94.jpg'} 
                     portfolioTitle={'Depositphotos. Evolutione.'}
                     portfolioLink={'/portfolio'}
                  />
                  <PortfolioBlock 
                     imgUrl={'https://advanced.team//assets/components/phpthumbof/cache/00ae9372e92edde76fd344b72941ad6e.708dfb4c78bcc48411d04e8173ee5f94.jpg'} 
                     portfolioTitle={'Depositphotos. Evolutione.'}
                     portfolioLink={'/portfolio'}
                  />
                  <PortfolioBlock 
                     imgUrl={'https://advanced.team//assets/components/phpthumbof/cache/00ae9372e92edde76fd344b72941ad6e.708dfb4c78bcc48411d04e8173ee5f94.jpg'} 
                     portfolioTitle={'Depositphotos. Evolutione.'}
                     portfolioLink={'/portfolio'}
                  />
               </div>
            </div>
            <Button words={wordsPortfolio} linkTo={'portfolio'}/>
         </section>

         <section className='main-skills'>
            <div className="container">
               <h3 className='title'>My skills</h3>
               <p>
                  Development in programming is an endless journey for me, driven by diligence and a passion for learning. Every day, I immerse myself in self-education, exploring new technologies and implementing them in practice. Aspiring to perfection and becoming the best programmer pushes me to seek new challenges and believe that there is always an opportunity for new knowledge and achievements in this captivating world of programming.
               </p>
               <div className="main-skills__container">
                  <div className="main-skills__block">
                     <div className='main-skills__block-img'>
                        <FaHtml5/>
                     </div>
                     <h5 className='main-skills__block-title'>HTML</h5>
                  </div>
                  <div className="main-skills__block">
                     <div className='main-skills__block-img'>
                        <FaCss3/>
                     </div>
                     <h5 className='main-skills__block-title'>CSS</h5>
                  </div>
                  <div className="main-skills__block">
                     <div className='main-skills__block-img'>
                        <IoLogoJavascript/>
                     </div>
                     <h5 className='main-skills__block-title'>JavaScript</h5>
                  </div>
                  <div className="main-skills__block">
                     <div className='main-skills__block-img'>
                        <IoLogoReact/>
                     </div>
                     <h5 className='main-skills__block-title'>React</h5>
                  </div>
                  <div className="main-skills__block">
                     <div className='main-skills__block-img'>
                        <FaNode/>
                     </div>
                     <h5 className='main-skills__block-title'>Node</h5>
                  </div>
                  <div className="main-skills__block">
                     <div className='main-skills__block-img'>
                        <BiLogoTypescript/>
                     </div>
                     <h5 className='main-skills__block-title'>TypeScript</h5>
                  </div>
                  <div className="main-skills__block">
                     <div className='main-skills__block-img'>
                        <SiExpress/>
                     </div>
                     <h5 className='main-skills__block-title'>Express</h5>
                  </div>
                  <div className="main-skills__block">
                     <div className='main-skills__block-img'>
                        <BiLogoMongodb/>
                     </div>
                     <h5 className='main-skills__block-title'>Mongodb</h5>
                  </div>
                  <div className="main-skills__block">
                     <div className='main-skills__block-img'>
                        <TbApi/>
                     </div>
                     <h5 className='main-skills__block-title'>REST API</h5>
                  </div>
               </div>
            </div>
         </section>

         <section className='main-blog'>
            <div className="container">
               <h3 className='title tr'>Blog</h3>
               <Posts numToShow={4}/>
            </div>
            <Button words={wordsBlog} linkTo={'blog'}/>
         </section>

         <section></section>
      </div>
   );
};