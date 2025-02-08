import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/home.jsx';
import AboutMe from '/pages/aboutMe.jsx';
import App from './app.jsx'
import Contact from '/pages/contact.jsx'
import Portfolio from '/pages/portfolio.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

