import { Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import styled from "styled-components"

export function StatusDelivery(props) {
  let [status, setStatus] = useState("")
  let [cpf, setCpf] = useState("")


  async function changeStatus() {
    if (!status || !cpf) {
      toast.error("Preencha todas as informações corretamente!", {position: "bottom-right"})
      return 
    }

    let options = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        cpf,
        status
      })
    }

    let response = await fetch("http://localhost:8080/delivery", options)
    console.log(await response.json())

    if (response.status >= 400) {
      toast.error("Não foi possível alterar o status da entrega!", {position: "bottom-right"})
      return
    }
    toast.success("Status da entrega alterado com sucesso!", {position: "bottom-right"})
  }

  return (
    <StyleWrapper>
      <h1 className="title">Alterar status da entrega</h1>
      

      <div className='infos-container'>
        <TextField label="Cpf" variant="outlined" value={cpf} onChange={(ev) => setCpf(ev.currentTarget.value)} />
        <TextField label="Status" variant="outlined" value={status} onChange={(ev) => setStatus(ev.currentTarget.value)} />
      </div>

      <Button style={{width: "100%"}} variant="contained" onClick={() => changeStatus()}>Alterar status</Button>
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
