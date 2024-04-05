import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from "./page/Login";
import DetailMovie from "./page/DetailMovie";
import { AuthProvider } from "./context/AuthContext";
import MovieSearchList from "./layout/MovieSearchList";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} ></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/detail" element={<DetailMovie />}>
                    <Route path=":id" element={<DetailMovie />} />
                </Route>
                <Route path="/search" element={<MovieSearchList />} />

            </Routes>
        </BrowserRouter>
    </AuthProvider>
);