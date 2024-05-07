import { Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import styled from "styled-components"

export function RegisterDelivery(props) {
  let [origin, setOrigin] = useState("")
  let [destination, setDestination] = useState("")
  let [time, setTime] = useState(0)
  let [price, setPrice] = useState(0)
  let [km, setKm] = useState(0)

  async function getAvailableDeliveryman() {
    let options = {
      method: "GET"
    }

    let response = await fetch("http://localhost:8080/entregador/disponivel", options)
    
    if (response.status >= 400) {
      return false
    }

    let responseData = await response.json()

    return responseData
  }

  async function register() {
    if (!km || !price || !time || !destination || !origin) {
      toast.error("Preencha todas as informações corretamente!", {position: "bottom-right"})
      return 
    }


    let deliveryman = await getAvailableDeliveryman()

    if (!deliveryman) {
      toast.error("Não foi possível encontrar um entregador disponível!", {position: "bottom-right"})
      return
    }

    let options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        origin,
        destination,
        travelHours: time,
        travelKm: km,
        totalPrice: price,
        status: "CONFIRMADO",
        deliverymanCpf: deliveryman.cpf
      })
    }

    let response = await fetch("http://localhost:8080/delivery", options)
    console.log(await response.json())

    if (response.status >= 400) {
      toast.error("Não foi possível finalizar o registro da entrega!", {position: "bottom-right"})
      return
    }


    toast.success("Registro da entrega finalizado com sucesso!", {position: "bottom-right"})
  }

  return (
    <StyleWrapper>
      <h1 className="title">Registrar entrega</h1>
      <h2 className='sub-title'>Registre novas entregas passando suas informações: </h2>

      <div className='infos-container'>
        <TextField label="Origem" variant="outlined" value={origin} onChange={(ev) => setOrigin(ev.currentTarget.value)} />
        <TextField label="Destino" variant="outlined" value={destination} onChange={(ev) => setDestination(ev.currentTarget.value)} />
        <TextField label="Tempo" variant="outlined" type='number' value={time} onChange={(ev) => setTime(ev.currentTarget.value)}/>
        <TextField label="Valor" variant="outlined" type='number' value={price} onChange={(ev) => setPrice(ev.currentTarget.value)}/>
        <TextField label="Quilômetros" variant="outlined" type='number' value={km} onChange={(ev) => setKm(ev.currentTarget.value)}/>
      </div>

      <Button style={{width: "100%"}} variant="contained" onClick={() => register()}>Finalizar registro</Button>
    </StyleWrapper>
  )
}

const StyleWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
padding: 40px;
max-width: 600px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

.title {
  font-size: 32px;
  font-weight: 600;
}

.sub-title {
  font-weight: 400;
  opacity: 0.6;
  font-size: 16px;
  margin-bottom: 20px;
}

.infos-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
}

`
