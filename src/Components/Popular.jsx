import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Button, Row } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import './Popular.css'
import { useNavigate } from 'react-router-dom';


function Popular({romanceData,historyData,horrorData,cartoonData,crimeData,Loading}) {

  const navigate = useNavigate();

  return (
    <div className='container' >
    <div className="container mt-5" style={{position:"relative"}}>
    <h1>Crime</h1>

    <div className='movies mt-3'>
    {crimeData.slice(0,4).map((movie,key)=>(
        <div index={key} className='mt-3'>
            <img className='img-popular' src={movie.backdrop_path} alt="...." style={{borderRadius:"10px"}}/>
            <p>{movie.title}</p>
        </div>
    ))}  
    </div>
    <Button variant='none' style={{backgroundColor:"#211b1b",position:"absolute",right:"0",backgroundColor:"rgb(253 114 5)",color:"white"}} onClick={()=>{navigate('/crime')}}> See More... </Button>
    </div>

    <div className="container mt-5" style={{position:"relative"}}>
    <h1>Romantic Movies</h1>

    <div className=' movies mt-3'>
    {romanceData.slice(0,4).map((movie,key)=>(
        <div  index={key} className='mt-3'>
            <img className='img-popular' src={movie.backdrop_path} alt="...." style={{borderRadius:"10px"}}/>
            <p>{movie.title.slice(0,10)}</p>
        </div>
    ))}   
    </div>
    <Button variant='none' style={{backgroundColor:"#211b1b",position:"absolute",right:"0",backgroundColor:"rgb(253 114 5)",color:"white"}} onClick={()=>{navigate('/romantic')}}> See More... </Button>
    </div>

    <div className="container mt-5" style={{position:"relative"}}>
    <h1>Cartoons Movies</h1>

    <div className=' movies mt-3'>
    {cartoonData.slice(0,4).map((movie,key)=>(
        <div index={key} className='mt-3'>
            <img className='img-popular' src={movie.backdrop_path} alt="...." style={{borderRadius:"10px"}}/>
            <p>{movie.title.slice(0,30)}</p>
        </div>
    ))}   
    </div>
    <Button variant='none' style={{backgroundColor:"#211b1b",position:"absolute",right:"0",backgroundColor:"rgb(253 114 5)",color:"white"}} onClick={()=>{navigate('/animation')}}> See More... </Button>
    </div>

    <div className="container mt-5" style={{position:"relative"}}>
    <h1>Horror Movies</h1>

    <div className=' movies mt-3'>
    {horrorData.slice(0,4).map((movie,key)=>(
        <div xs={12} sm={6} md={3} index={key} className='mt-3'>
            <img className='img-popular' src={movie.backdrop_path} alt="...." style={{borderRadius:"10px"}}/>
            <p>{movie.title}</p>
        </div>
    ))}   
    </div>
    <Button variant='none' style={{backgroundColor:"#211b1b",position:"absolute",right:"0",backgroundColor:"rgb(253 114 5)",color:"white"}} onClick={()=>{navigate('/horror')}}> See More... </Button>
    </div>

    <div className="container mt-5" style={{position:"relative"}}>
    <h1>Historical Movies</h1>

    <div className=' movies mt-3'>
    {historyData.slice(0,4).map((movie,key)=>(
        <div index={key} className='mt-3'>
            <img className='img-popular' src={movie.backdrop_path} alt="...." style={{borderRadius:"10px"}}/>
            <p>{movie.title}</p>
        </div>
    ))}   
    </div>
    <Button variant='none' style={{backgroundColor:"#211b1b",position:"absolute",right:"0",backgroundColor:"rgb(253 114 5)",color:"white"}} onClick={()=>{navigate('/history')}}> See More... </Button>
    </div>

     
    </div>
  )
}

export default Popular
