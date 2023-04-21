import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Main } from './pages/Main'
import { Portfolio } from './pages/Portfolio';
import { AboutMe } from "./pages/AboutMe";
import { Contacts } from "./pages/Contacts";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <App/>,
      children: [
         {
            path: '/',
            element: <Main/>
         },
         {
            path: 'aboutme',
            element: <AboutMe/>,
         },
         {
            path: 'portfolio',
            element: <Portfolio/>,
         },
         {
            path: 'contacts',
            element: <Contacts/>,
         },
      ],
   },
]);