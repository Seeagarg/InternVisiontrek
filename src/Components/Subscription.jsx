import React from 'react'
import subImage from '../Images/subscription.png'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import './Intro.css';

function Subscription() {

  return (
    <div className='container d-flex flex-column flex-md-row align-items-center mt-5'>
    <div>
        <img src={subImage} alt=''/>
    </div>
    <div className=''>
    <h4>Subscription</h4>
    <p className='mt-4'>Ready to watch enter your Email Address to Subscribe.When you Subscribe,There is a free Trial period.</p>
    <Form className="d-flex text-light">
            <Form.Control
              type="search"
              placeholder="Search"
              className="input-class me-2 text-light"
              aria-label="Search"
              style={{backgroundColor:"#211b1b",border:"none"}}
            />

            <Button variant='none' style={{backgroundColor:"rgb(253 114 5)",color:"white"}}>Subscribe</Button>
          </Form>

          <p className='mt-2' style={{fontSize:"13px"}}>By Clicking the "Subscribe" button,you agree to processing of <span style={{color:"rgb(253 114 5)"}}>personal data</span></p>
    </div>
    
      
    </div>
  )
}

export default Subscription
