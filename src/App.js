import React from 'react'
import "./css/App.css"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from "./page/Login";
import { AuthProvider } from "./context/AuthContext";
import RenderHeaderMain from './page/RenderHeaderMain'
import DataDetail from './components/DataDetail';
import DataMovieSearch from './components/DataMovieSearch';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RenderHeaderMain />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/detail" element={<DataDetail />}>
                        <Route path=":id" element={<DataDetail />} />
                    </Route>
                    <Route path="/search" element={<DataMovieSearch />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App