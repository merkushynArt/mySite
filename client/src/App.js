import { useEffect } from 'react';
import './App.css';
import { Preloader } from './components/Preloader';

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
         <h1>hello</h1>
      </div>
   );
}

export default App;
