import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";  
import './registerStyle.css'

export function Register_DeliveryMan() {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');

    
    const handleSubmit = (event) => {
        event.preventDefault();  
        console.log('Name:', name, 'cpf:', cpf); 
    };

    return (
        <div className='forms'>
            <form onSubmit={handleSubmit}>
                <Input value={name} onChange={e => setName(e.target.value)} placeholder="Coloque o nome" />
                <Input value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu cpf" />
                <Input value={vehicle} onChange={e => setVehicle(e.target.value)} placeholder="Digite seu veiculo" />
                <Input value={price} onChange={e => setPrice(e.target.value)} placeholder="Digite seu preco por km" />
                <Input value={status} onChange={e => setStatus(e.target.value)} placeholder="Digite a origem do pedido" />
                <Button type="submit">Register</Button>
            </form>
        </div>
    );

    
}
