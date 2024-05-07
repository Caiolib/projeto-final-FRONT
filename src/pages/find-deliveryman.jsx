import { Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import styled from "styled-components"
import { Alert } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import PersonIcon from '@mui/icons-material/Person';

export function FindDeliveryman(props) {
  let [deliveryman, setDeliveryman] = useState(undefined)

  async function getDeliveryman() {
    let options = {
      method: "GET",
    }

    let response = await fetch("http://localhost:8080/entregador", options)

    if (response.status >= 400) {
      return
    }

    let responseData = await response.json()
    setDeliveryman(responseData[0])

    console.log(responseData[0])
  }

  useEffect(() => {
    getDeliveryman()
  }, [])

  return (
    <StyleWrapper>
      <h1 className="title">Encontrar entregador</h1>
      <h2 className='sub-title'>Veja um entregador que está disponível:</h2>
      
      {
        !deliveryman ? 
          <Alert icon={<ErrorIcon fontSize="inherit" />} severity="error">
            Não foi possível encontrar um entregador
          </Alert> 
        :
        <Alert icon={<PersonIcon fontSize="inherit" />} severity="success">
          <p><strong>Nome: </strong> {deliveryman.nome}</p>
          <p><strong>cpf: </strong> {deliveryman.cpf}</p>
          <p><strong>Valor da viagem: </strong> {deliveryman.precoViagem}</p>
          <p><strong>Tipo do veículo: </strong> {deliveryman.tipoVeiculo}</p>
        </Alert>
      }
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
