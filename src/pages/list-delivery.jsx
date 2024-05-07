import { Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import styled from "styled-components"
import { Alert } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import PersonIcon from '@mui/icons-material/Person';
// import { ToastContainer, toast } from 'react-toastify';


export function ListDelivery() {
  let [data, setData] = useState([])

  useEffect(() => {
    load()
  }, [])


  
  async function load() {
    let data = await fetch("http://localhost:8080/delivery", {
      method: "GET"
    }).then(response => {

      return response.json()

    }).then(data => {
      setData(data)
    })
    .catch(response => {
        toast.error("Não foi possível carregar as entregas!", {position: "bottom-right"})
    })
  }

  return (
    <StyleWrapper>
        <div className="card">
            <table>
                <tbody>
                    <tr>
                        <td> ID </td>
                        <td> Origem </td>
                        <td> Destino </td>
                        <td> Preço </td>
                        <td> ID Entregador </td>
                        <td> Status </td>
                    </tr>
                    {data.map((delivery, index) => {
                    return <tr key={index}>
                        <td>{delivery.id}</td>
                        <td>{delivery.origin}</td>
                        <td>{delivery.destination}</td>
                        <td>{delivery.totalPrice}</td>
                        <td>{delivery.deliveryManId}</td>
                        <td>{delivery.status}</td>
                    </tr>
                    })}
                </tbody>
            </table>
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