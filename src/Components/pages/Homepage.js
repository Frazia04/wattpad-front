import React from 'react';
import Navbar from '../Navigation/Navbar';

import './Homepage.css'

export default function () {
  return (
<div className='viewport__main'>
          <div className='pages__home'>
              <div className='pages__home__hero'>
                  <h1 class="pages__home__hero__title">Where Stories Live!</h1>


                  <h2 class="pages__home__hero__byline">
                      Enter a book you like and the site will analyse our huge database of real readers' favorite books to provide book recommendations and suggestions for what to read next.
                  </h2>
                  <div data-react-class="frontend/v1/home_search_box"
                      data-react-props="{&quot;algoliaApplicationId&quot;:&quot;72ERILJUS1&quot;,&quot;algoliaSearchAPIKey&quot;:&quot;ae6d615d758a5c6128feb22949c3a25d&quot;,&quot;bookShowUrl&quot;:&quot;/isbn/&quot;,&quot;bookCoverApiUrl&quot;:&quot;https://d3a7xcjwi1uszv.cloudfront.net&quot;,&quot;enterIsbnUrl&quot;:&quot;/add-book&quot;}" data-react-cache-id="frontend/v1/home_search_box-0" class="pages__home__hero__search-box-container">
                      <div id="home-search-box">
                          <div class="home-search-box__icon"></div>
                          <input class="home-search-box__input" placeholder="Type the title or the author of a book you like to read &amp; we take care of the rest..."></input>
                      </div>
                  </div>
              </div>
          </div>
{/* 
      </div><div className='pages__home__genres'>
      
      <div className ='pages__home__genres__container'>

      <h2 class="pages__home__genres__title">Popular Books</h2>

     
      </div> */}
        
        
        
        
        </div>

    
    
        
   
  )
}
