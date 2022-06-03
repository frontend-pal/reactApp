import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/images/favicon.svg';

const SearchBar = ({ formId, handleFunction, defaultInputValue = '' }) => {
  const [inputValue, setInputValue] = useState(defaultInputValue);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    handleFunction(e, inputValue);
  }

  const goHome= () => {
    navigate('home');
  }

  useEffect(() => {
    setInputValue(defaultInputValue);
  }, [defaultInputValue])

  return (
    <form onSubmit={handleSubmitEvent} id={formId}>
      <span>{formId}</span>
      <div className="search-box-container">
        <div className="inner-search-box flex-center ">

          <div className="logo mr-2" onClick={goHome}>
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