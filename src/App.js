import React from 'react'
import "./css/App.css"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from "./page/Login";
import DetailMovie from "./page/DetailMovie";
import { AuthProvider } from "./context/AuthContext";
import MovieSearchList from "./page/MovieSearchList";
import RenderHeaderMain from './page/RenderHeaderMain'
import DataDetail from './components/DataDetail';

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
                    <Route path="/search" element={<MovieSearchList />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App