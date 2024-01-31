import React from 'react'
import image from '../Images/hero.png'
import { Button } from 'react-bootstrap'
import './Intro.css'

function Intro() {
  return (
    <div className='container d-flex flex-column flex-md-row align-items-center'>
    <div className=''>
    <h1>Your Ultimate Destination for top-quality TV shows,movies,and more</h1>
      <p>A library of movies and TV shows you can watch anywhere </p>
      <Button className='btn' variant='none' className='m-2 ' style={{backgroundColor:"rgb(253 114 5)",}}>Subscribe</Button>
      <Button className='btn' variant='rgb(253 114 5)' className='m-2 text-light ' style={{border:"1px solid rgb(253 114 5)"}}>Free Trial</Button>
    </div>
    <div className='img-part'>
        <img src={image} alt=''/>
    </div>
      
    </div>
  )
}

export default Intro
