import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { Register } from './pages/register'; // Adjust the import path if necessary
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
             <Link to="/register">Registrar Pedido</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Listagem De Pedido</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Pedidos Finalizados</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
      </Menubar>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;