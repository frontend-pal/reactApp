import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from '../components/screens/Home';
import { NoResults } from '../components/screens/NoResults';
import { SearchBar } from '../components/shared/SearchBar';

export const AppRouter = () => {
    return (
        <>
            <SearchBar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/no-content" element={<NoResults />} />
                <Route
                    path="*"
                    element={<Navigate to="/home" replace />}
                />
            </Routes>
        </>
    )
}
