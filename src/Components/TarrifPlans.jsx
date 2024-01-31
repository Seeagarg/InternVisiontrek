import React from 'react'
import { Row } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from 'react-bootstrap/Button';
import './TarrifPlans.css'

function TarrifPlans() {

  const arr =[
     {comfort:"Base",
      price:"$7.99",
      review:"For Warm and cozy views with the family",
      freeDays:"7",
      features:[{check:true,data:"unlimited movies,TV Series and more"},{check:true,data:"viewing on 1 screen"},{check:false,data:"HD Quality"}]},
      {
      comfort:"Comfort",
      price:"$9.99",
      review:"For fun views with the family",
      freeDays:"15",
      features:[{check:true,data:"unlimited movies,TV Series and more"},{check:true,data:"viewing on 2 screen"},{check:true,data:"HD Quality"}]
      },
      {
        comfort:"Comfort+",
        price:"$12.99",
        review:"For true connoiseures of cinema",
        freeDays:"21",
        features:[{check:true,data:"unlimited movies,TV Series and more"},{check:true,data:"viewing on 3 screen"},{check:true,data:"Ultra Quality"}]
        },
        {
            comfort:"VIP",
            price:"$12.99",
            review:"For a home cinema feel",
            freeDays:"30",
            features:[{check:true,data:"unlimited movies,TV Series and more"},{check:true,data:"viewing on 5 screen"},{check:true,data:"Ultra+ Quality"}]
            },
    ]
    
  return (
    <div className='container mt-5'>
    <h1>Tariff Plans</h1>

    <Row className='mt-3'>
    {arr.map((movie)=>(
        <Col xs={12} sm={6} md={3} className='mt-3'>
            <div className="container p-3" style={{borderRadius:"10px",backgroundColor:"#211b1b",}}>
            <h5>{movie.comfort}</h5>
            <h3>{movie.price}</h3>
            <p>{movie.preview}</p>
            <p style={{color:"rgb(253 114 5)"}}>{movie.freeDays} days free</p>
            {
                movie.features.map((feature)=>(
                    <p style={{fontSize:"15px"}}>{feature.check?<CheckCircleIcon/>:<CancelIcon/>}{feature.data}</p>
                ))
            }

            <Button style={{border:"1px solid rgb(253 114 5)",backgroundColor:"black",width:"100%",color:"rgb(253 114 5)"}}>Choose a Tarrif</Button>
            
            </div>
        </Col>
    ))}
    </Row>
    </div>
  )
}

export default TarrifPlans
