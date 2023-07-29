import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Main } from './pages/Main'
import { Portfolio } from './pages/Portfolio';
import { Blog } from "./pages/Blog";
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
            path: 'blog',
            element: <Blog/>,
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