import React from 'react'
import SearchIcon from '../../assets/images/start-search.svg';

export const Home = () => {
  return (
    <>
      <div className="full-width">
        <div className="container mt-1 ml-1 mr-1">

          <div className="no-results">
            <img src={SearchIcon} className="anyresults" alt="search-icon" />
            <h2>
              Empiece su busqueda
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus consectetur quo, illo
              reiciendis ut quas, obcaecati molestias, debitis minus enim necessitatibus praesentium in vel incidunt
              dolores deleniti blanditiis unde.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
