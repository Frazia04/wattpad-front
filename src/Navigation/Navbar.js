import React from 'react'

import "./Navbar.css";
import logo2 from "../Logo/logo2.png";
export default function Navbar() {
  return (
    <div>
           
           <div className="header" id='header'>
            <div className='header-top'>
                <div className='header-top-container'>
                    <div className="header__column header__column--left">
                        
  
   
        <div className='header__column header__column--left'>
       <div className='header__item header__item--link header__item--current-link header__item--hide-mobile' >
     <a class="header__item__link" data-click-action="track" data-event-category="Header" data-event-label="Home" data-event-action="click" href="/">
            Home
            {/* ::after */}
      </a>
    
        </div>
        
        <div className="header__item header__item--link  header__item--hide-mobile">
        <a class="header__item__link" data-click-action="track" data-event-category="Header" data-event-label="Books" data-event-action="click" href="/">Books</a>
         
        </div>
        

         <div class="header__item header__item--link  header__item--hide-mobile">
          <a class="header__item__link" data-click-action="track" data-event-category="Header" data-event-label="Add Books" data-event-action="click" href="/blog">Add Books</a>
          
        </div>
        </div>

       <div className='header__column header__column--center' >
       <div className='header__item' >
       <a class="header__item__logo" href="/"><img src={logo2} alt="What to read Next??" /></a>


      </div>
    </div>
    
     
     
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    
    </div>
  </div>
  </div>
  </div>



    </div>
    
  )
}
