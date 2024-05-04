import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";  
import './registerStyle.css'


export function Register_order() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [houres, setHoures] = useState('');
    const [km, setKm] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');
    const [deliveryman_id, setDeliveryman_id] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Origin:', origin, 'Destination:', destination, 'Date:', date, 'Houres:', houres, 'Km:', km, 'Price:', price, 'Status:', status, 'Deliveryman ID:', deliveryman_id);
    };

    return (
        <div className='forms'>
            <form onSubmit={handleSubmit}>
                <Input value={origin} onChange={e => setOrigin(e.target.value)} placeholder="Coloque a origem" />
                <Input value={destination} onChange={e => setDestination(e.target.value)} placeholder="Digite o destino" />
                <Input value={date} onChange={e => setDate(e.target.value)} placeholder="Digite a data" />
                <Input value={houres} onChange={e => setHoures(e.target.value)} placeholder="Digite as horas" />
                <Input value={km} onChange={e => setKm(e.target.value)} placeholder="Digite a quilometragem" />
                <Input value={price} onChange={e => setPrice(e.target.value)} placeholder="Digite o preço por km" />
                <Input value={status} onChange={e => setStatus(e.target.value)} placeholder="Digite o status" />
                <Input value={deliveryman_id} onChange={e => setDeliveryman_id(e.target.value)} placeholder="Digite o ID do entregador" />
                <Button type="submit">Register</Button>
            </form>
        </div>
    );
}
