import { useEffect } from 'react';
import './App.css';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
   useEffect(() => {
      const timer = setTimeout(() => {
         document.body.classList.add('loaded');
      }, 2000);
      return () => clearTimeout(timer);
   }, []);

   return (
      <div className="App">
         <Preloader/>
         <Header/>
         <Outlet/>
      </div>
   );
}

export default App;
