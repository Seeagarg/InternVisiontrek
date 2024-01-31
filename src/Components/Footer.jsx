import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <div className="container mb-0">
    <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top container">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
        {/* <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg> */}
        <h1 className='text-light'><span style={{color:"rgb(253 114 5)"}}>Prime</span>Flicks</h1>
      </a>

      <p class="text-light">info@primeflicks.com</p>
      <div><FacebookIcon/>&nbsp;&nbsp;<TelegramIcon/>&nbsp;&nbsp;<TwitterIcon/>&nbsp;&nbsp;<InstagramIcon/></div>
    </div>

    <div class="col mb-3">
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">FAQ</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Investor relation</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Privacy</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Speed test</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Help center</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Jobs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">cookies preference</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">legal notices</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Account</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Ways to watch</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Corporate Information</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">only on primflicks</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Media center</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Terms of us</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Contact us</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Subscription</a></li>
      </ul>
    </div>
  </footer>
  </div>
  )
}

export default Footer
