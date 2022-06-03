import PropTypes from 'prop-types';
import React, { useState } from 'react'

import Logo from '../../assets/images/favicon.svg';

const SearchBar = ({formId, handleFunction}) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    handleFunction(e, inputValue);
  }

  return (
    <form onSubmit={ handleSubmitEvent } id={ formId }>
      <span>{ formId }</span>
      <div className="search-box-container">
        <div className="inner-search-box flex-center ">

          <div className="logo mr-2">
            <img src={Logo} alt="search what you want" />
          </div>
          <div className="search-input-container flex-center">
            <input
              type="text"
              className="search-input"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="btn btn-search light-gray">
              <i className="fi fi-search"></i>
            </button>
          </div>
        </div>

      </div >
    </form>
  )
}

SearchBar.propTypes = {
  formId: PropTypes.string,
  handleFunction: PropTypes.func
}

export default SearchBar;