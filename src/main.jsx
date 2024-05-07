import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RegisterDelivery } from './pages/register-delivery'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/registrar-entrega",
        element: <RegisterDelivery />,
      },
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
