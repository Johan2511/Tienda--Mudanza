import React from 'react';
import { useRoutes, BrowserRouter} from 'react-router-dom'
import './App.css'
import Home from '../Home/index.jsx';
import Servicios from '../Services/index.jsx';
import AboutPage from '../Nosotros/index.jsx';
import Contact from '../Contact/index.jsx';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-service', element: <Servicios /> },
    { path: '/AboutUs', element: <AboutPage /> },
    { path: '/ContactUS', element: <Contact /> }
  ])
  return routes
}


const  App = () => {

  return (
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
  )
}

export default App
