import React from 'react'
import "./css/App.css"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from "./page/Login";
import { AuthProvider } from "./context/AuthContext";
import RenderHeaderMain from './page/RenderHeaderMain'
import DataMovieSearch from './components/search/DataMovieSearch';
import DataTrailer from './components/trailer/DataTrailer';
import DataGenresID from './components/genres/DataGenresID';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RenderHeaderMain />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/search" element={<DataMovieSearch />} />
                    <Route path="/trailer" element={<DataTrailer />} />
                    <Route path="/genres" element={<DataGenresID />} >
                        <Route path=":id" element={<DataGenresID />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App