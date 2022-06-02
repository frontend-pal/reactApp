import React from 'react';
import NoResultIcon from '../../assets/images/no-results.svg';

export const NoResults = () => {
  return (
    <>
      <div className="full-width">
        <div className="container mt-1 ml-1 mr-1">

          <div className="no-results">
            <img src={NoResultIcon} className="anyresults" alt="search-icon" />
            <h2>
              Sin resultados
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
