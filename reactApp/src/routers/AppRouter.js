import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from '../components/screens/Home';
import { NoResults } from '../components/screens/NoResults';
import SearchBar from '../components/shared/SearchBar';

import { search } from "../actions/search";
import { toggleSpinner } from '../actions/spinner';
import { useDispatch, useSelector } from 'react-redux';

export const AppRouter = () => {
    const dispatch = useDispatch();

    const handleSubmitEvent = (e, inputValue) => {
        dispatch(search(e.target.id, inputValue));
        dispatch(toggleSpinner(true));
        setTimeout(() => {
            dispatch(toggleSpinner(false));
        }, 4000);
    }

    const { loading } = useSelector(state => state.spinner);
    console.log(loading);
    return (
        <div className={loading ? 'full-layout loading' : 'full-layout'}>
            <div className='router-wrapper'>
                <SearchBar formId='main-search-box' handleFunction={handleSubmitEvent} />
                {/* <SearchBar formId='main-search-box2'/>  // for testing purposes only */}
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/no-content" element={<NoResults />} />
                    <Route
                        path="*"
                        element={<Navigate to="/home" replace />}
                    />
                </Routes>
            </div>
        </div>
    )
}
