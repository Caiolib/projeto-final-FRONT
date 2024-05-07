import { Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import styled from "styled-components"
import { Alert } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import PersonIcon from '@mui/icons-material/Person';
// import { ToastContainer, toast } from 'react-toastify';


export function ListDelivery() {
  let [deliveries, setDeliveries] = useState([])

  useEffect(() => {
    load()
  }, [])

  async function load() {
    let response = await fetch("http://localhost:8080/delivery", {method: "GET"})

    if (response.status >= 400) {
      return
    }

    let responseData = await response.json()
    
    setDeliveries(responseData)
  }

  async function deleteDelivery(id, index) {
    let options = {
      method: "DELETE",
    }

    let response = await fetch("http://localhost:8080/delivery/" + id, options)

    if (response.status >= 400) {
      toast.error("Não foi possível apagar a entrega")
      return
    }

    toast.success("Entrega deletado com sucesso!")

    deliveries.splice(index, 1)
    setDeliveries([...deliveries])
  }

  return (
    <StyleWrapper>
      <h1 className="title">Listar entregas</h1>
      <h2 className='sub-title'>Veja a baixo as entregas e suas informações</h2>

      <div className="table">
        <header>
            <p> ID </p>
            <p> Origem </p>
            <p> Destino </p>
            <p> Preço </p>
            <p> CPF Entregador </p>
            <p> Status </p>
        </header>
        {deliveries.map((delivery, index) => {
        return (
              <div className='data-item' key={index}>
                  <p>{delivery.id}</p>
                  <p>{delivery.origin}</p>
                  <p>{delivery.destination}</p>
                  <p>{delivery.totalPrice}</p>
                  <p>{delivery.deliverymanCpf}</p>
                  <p>{delivery.status}</p>
                  <Button variant="contained" color="error" onClick={() => deleteDelivery(delivery.id, index)}>Delete</Button>
              </div>
            );
        })}
      </div>
    </StyleWrapper>
  )

 
}

const StyleWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
padding: 40px;
max-width: 1000px;
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

.table {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  max-height: 400px;
  overflow-y: scroll;

}

.table header {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  min-height: 40px;
  background-color: black;
}

.table header p {
  width: 100%;
  border-right: solid 1px white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}

.table .data-item {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  min-height: 40px;
}

.table .data-item p {
  width: 100%;
  border-right: solid 1px white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background: rgba(0, 0, 0, 0.1);
}

`