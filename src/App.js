import React from 'react'
import "./css/App.css"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from "./page/Login";
import { AuthProvider } from "./context/AuthContext";
import RenderHeaderMain from './page/RenderHeaderMain'
import DataMovieSearch from './page/SearchPage';
import DataTrailer from './components/trailer/DataTrailer';
import GenresPage from './page/GenresPage';
import ProfileUserPage from './page/ProfileUserPage';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RenderHeaderMain />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/search" element={<DataMovieSearch />} />
                    <Route path="/trailer" element={<DataTrailer />} />
                    <Route path="/profile" element={<ProfileUserPage />} />
                    <Route path="/genres" element={<GenresPage />} >
                        <Route path=":id" element={<GenresPage />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App