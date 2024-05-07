import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from "styled-components"
import { RegisterDelivery } from './pages/register-delivery';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  

  return (
    <StyleWrapper>
      <ToastContainer/>
      <div className='nav-bar-container'>
        <a href="/registrar-entrega" className={'menu ' + (window.location.pathname == "/registrar-entrega" ? "active" : "") }>Registrar Entrega</a>
      </div>

      <Routes>
        <Route path="registrar-entrega" Component={ RegisterDelivery } />        
      </Routes>

    </StyleWrapper>
  )
}

const StyleWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;

.nav-bar-container {
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.nav-bar-container .menu {
  height: 100%;
  padding: 0px 16px;
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0  , 0);
  color: #000000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 500;
}

.nav-bar-container .active {
  color: white !important;
  background-color: black !important;
}

`

export default App
