import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import AppointmentForm from './pages/AppointmentForm';


import './App.css'
import Contact from './pages/Contact';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,

  },
  {
    path:'/form',
  element: <AppointmentForm/>,
  },
  {
    path:'/contact',
    element: <Contact/>
  },
  {
    path:'/about',
    element: <About/>
  }
]);
const App =()=>{
  return <RouterProvider router={router}/>;
};

export default App
