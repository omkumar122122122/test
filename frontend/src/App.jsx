import React from 'react'
import Home from './features/home/Home';
import Login from './features/login/Login';
import Eventdetail from './features/home/components/Eventdetail';
import Addevent from './features/addevent/Addevent';

import {
  useEffect,
  useState
} from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";






import {createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const { id } = useParams();
  // const navigate = useNavigate();

  const route=createBrowserRouter([
    {
      path: "/home",
      element:<Home/>
    },
    {
      path: "/",
      element:<Login/>
    },
    {
      path: "/addevnt",
      element:<Addevent/>
    },
    {
      path: "/event/:id",
      element:<Eventdetail/>
    }
   
  ])


  return (
    <div>
      <RouterProvider router={route}/>
    </div>
  )
}

export default App