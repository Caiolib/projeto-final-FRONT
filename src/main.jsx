import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RegisterDeliveryman } from './pages/register-deliveryman.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { FindDeliveryman } from './pages/find-deliveryman.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/registrar-entregador",
        element: <RegisterDeliveryman />,
      },
      {
        path: "/encontrar-entregador",
        element: <FindDeliveryman />,
      },
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
