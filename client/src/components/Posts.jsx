import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Posts = ({ numToShow }) => {
   const [posts, setPosts] = useState([
      {
         id: 1,
         image: "https://c4.wallpaperflare.com/wallpaper/235/476/975/5bd0a020ef54c-wallpaper-preview.jpg",
         title: "Continuous Growth: The Key to Success in Programming and Life",
         text: "Continuous development is an essential component of success both in programming and in life. In the field of programming, changes and innovations are constant, and only through continuous learning and improvement can we remain relevant and achieve remarkable results. Similarly, in life, the desire for personal growth and development allows us to overcome obstacles, explore new horizons, and achieve our goals. Constant self-improvement and thirst for knowledge are the keys to realizing our dreams and attaining success."
      },
      {
         id: 2,
         image: "https://static.tildacdn.com/tild6361-6132-4066-a534-316233633137/photo.jpg",
         title: "The Indispensable Role of Websites in the Modern Digital World",
         text: "In the modern digital world, a website becomes an essential element for every business or company. It serves as a business card and an effective tool for attracting customers, establishing trust, and expanding the audience. Having a website allows companies to showcase their products and services online, conduct marketing campaigns, optimize business processes, and stay one step ahead of competitors. In today's rapidly changing world, a website becomes an indispensable tool for successful operation and business development."
      },
      {
         id: 3,
         image: "https://c4.wallpaperflare.com/wallpaper/235/476/975/5bd0a020ef54c-wallpaper-preview.jpg",
         title: "Continuous Growth: The Key to Success in Programming and Life",
         text: "Continuous development is an essential component of success both in programming and in life. In the field of programming, changes and innovations are constant, and only through continuous learning and improvement can we remain relevant and achieve remarkable results. Similarly, in life, the desire for personal growth and development allows us to overcome obstacles, explore new horizons, and achieve our goals. Constant self-improvement and thirst for knowledge are the keys to realizing our dreams and attaining success."
      },
      {
         id: 4,
         image: "https://static.tildacdn.com/tild6361-6132-4066-a534-316233633137/photo.jpg",
         title: "The Indispensable Role of Websites in the Modern Digital World",
         text: "In the modern digital world, a website becomes an essential element for every business or company. It serves as a business card and an effective tool for attracting customers, establishing trust, and expanding the audience. Having a website allows companies to showcase their products and services online, conduct marketing campaigns, optimize business processes, and stay one step ahead of competitors. In today's rapidly changing world, a website becomes an indispensable tool for successful operation and business development."
      },
   ]);

   let displayedPosts = posts;
   if(numToShow) {
      displayedPosts = posts.slice(0, numToShow);
   }
   
   return (
      <div className='posts'>
         {
            displayedPosts.map((post) => (
               <Link className='posts__item' to={'blog'} key={post.id}>
                  <div className="posts__item-img">
                     <img src={post.image} alt={post.title} />
                  </div>
                  <h4 className='posts__item-title'>{post.title}</h4>
                  <p className='posts__item-text'>{post.text}</p>
                  <div className='posts__item-mask'>
                     <div className="posts__item-mask--circle">
                        <p>Click<br/>Here</p>
                     </div>
                  </div>
               </Link>
            ))
         }
      </div>
   );
}