import React from 'react'
import Logo from '../../assets/images/favicon.svg';

export const SearchBar = () => {
  return (
    <>
      <div className="search-box-container">
        <div className="inner-search-box flex-center ">

          <div className="logo mr-2">
            <img src={Logo} alt="search what you want" />
          </div>
          <div className="search-input-container flex-center">
            <input type="text" className="search-input" />
            <button className="btn btn-search light-gray">
              <i className="fi fi-search"></i>
            </button>
          </div>
        </div>

      </div >
    </>
  )
}
