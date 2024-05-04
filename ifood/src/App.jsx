import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { Register_DeliveryMan } from './pages/register-deliveryman'; 
import { Register_order } from './pages/register-order';
import './index.css'

function App() {
  return (
    <div className="menu-container">
      <Menubar>
      <div className='menu-button'>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
             <Link to="/register/deliveryman">Registrar Entregador</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem><Link to="/register/order">Registrar Pedido</Link></MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Pedidos Finalizados</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Historico de Pedidos</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
      </Menubar>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/register/deliveryman" element={<Register_DeliveryMan />} />
        <Route path="/register/order" element={<Register_order />} />
      </Routes>
    </div>
  );
}

export default App;