import { Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import styled from "styled-components"

export function RegisterDeliveryman(props) {
  let [cpf, setCpf] = useState("");
  let [name, setName] = useState("");
  let [vehicle, setVehicle] = useState("")
  let [price, setPrice] = useState(0)

  async function register() {
    if (!cpf || !name || !vehicle || !price) {
      toast.error("Preencha todas as informações corretamente!", {position: "bottom-right"})
      return 
    }

    let options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({cpf, nome: name, tipoVeiculo: vehicle, precoViagem: price, status: "DISPONIVEL"})
    }

    let response = await fetch("http://localhost:8080/entregador", options)

    if (response.status >= 400) {
      toast.error("Não foi possível finalizar o registro do entregador!", {position: "bottom-right"})
      return
    }

    toast.error("Registro do entregador finalizado com sucesso!", {position: "bottom-right"})
  }

  return (
    <StyleWrapper>
      <h1 className="title">Registrar entregador</h1>
      <h2 className='sub-title'>Registre novos entregadores passando suas informações: </h2>

      <div className='infos-container'>
        <TextField label="CPF" variant="outlined" value={cpf} onChange={(ev) => setCpf(ev.currentTarget.value)} />
        <TextField label="Nome" variant="outlined" value={name} onChange={(ev) => setName(ev.currentTarget.value)} />
        <TextField label="Tipo do veículo" variant="outlined" value={vehicle} onChange={(ev) => setVehicle(ev.currentTarget.value)} />
        <TextField label="Valor da viagem" variant="outlined" type='number' value={price} onChange={(ev) => setPrice(ev.currentTarget.value)}/>
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
