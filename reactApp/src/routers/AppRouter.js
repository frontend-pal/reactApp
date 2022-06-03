import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { Home } from '../components/screens/Home';
import { NoResults } from '../components/screens/NoResults';
import SearchBar from '../components/shared/SearchBar';

import { useDispatch, useSelector } from 'react-redux';
import { ItemList } from '../components/screens/ItemList';

import { search } from "../actions/search";
import { ProductDescription } from '../components/screens/ProductDescription';

export const AppRouter = (props) => {
    const { loading } = useSelector(state => state.spinner);
    const [defaultInputValue, setDefaultInputValue] = useState('');

    const navigate = useNavigate();
    const searchFormId = 'main-search-box';
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const handleSubmitEvent = (e, inputValue) => {
        const query = encodeURI(inputValue);

        dispatch(search(e.target.id, query));
        navigate(`/items?q=${query}`);
    }

    useEffect(() => {
        console.log(query);
        setDefaultInputValue(query);
    }, [query])


    return (
        <div className={loading ? 'full-layout loading' : 'full-layout'}>
            <div className='router-wrapper'>
                <SearchBar formId={searchFormId} handleFunction={handleSubmitEvent} defaultInputValue={defaultInputValue} />
                {/* <SearchBar formId='main-search-box2'/>  // for testing purposes only */}
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/no-content" element={<NoResults />} />
                    <Route exact path="/items" element={<ItemList formSelector={searchFormId} />} />
                    <Route exact path="/items/:itemId" element={<ProductDescription />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </div>
    )
}
