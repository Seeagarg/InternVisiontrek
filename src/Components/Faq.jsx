import React from 'react'
import faq from '../Images/faq.png'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import './Intro.css'

function Faq() {
  return (
    <div className='container d-flex flex-column flex-md-row align-items-center mt-5'>
    <div className='m-auto'>
    
    <h3>Frequently Asked Questions</h3>
    <div className="mt-5">
     <h6>What is PrimeFlicks?<span className='float-end'><AddIcon fontSize='large'/></span></h6>
     <hr />
     <h6>Where I can Watch<span className='float-end'><AddIcon fontSize='large'/></span></h6>
     <hr />
     <h6>How do I cancel<span className='float-end'><AddIcon fontSize='large'/></span></h6>
     <hr />
     <h6>Is watch me suitable for kids<span className='float-end'><AddIcon fontSize='large'/></span></h6>
     <hr />
     <h6>What can I watch on PrimeFlicks<span className='float-end'><CloseIcon fontSize='large'/></span></h6>
     <hr />
     <p>PrimeFlicks has an extensive library of feture films,documentaries,TV shows,anime.</p>

     <p>watch as much as you want,any time you want.</p>
     </div>
     </div>
    <div className='m-auto'>
        <img src={faq} alt='......'/>
    </div>
      
    </div>
  )
}

export default Faq
