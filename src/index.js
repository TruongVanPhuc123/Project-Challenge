import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from "./page/Login";
import DetailMovie from "./page/DetailMovie";
import { AuthProvider } from "./context/AuthContext";
import MovieSearch from "./layout/MovieSearch";
import AllNowPlaying from "./layout/AllNowPlaying";
import AllPopular from "./layout/AllPopular";
import AllToprated from "./layout/AllToprated";
import AllUpcoming from "./layout/AllUpcoming";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="/detailmovies/:id" element={<DetailMovie />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/search/movie/query/:id" element={<MovieSearch />}></Route>
                <Route path="/seemore/nowplaying" element={<AllNowPlaying />} />
                <Route path="/seemore/popular" element={<AllPopular />} />
                <Route path="/seemore/toprated" element={<AllToprated />} />
                <Route path="/seemore/upcoming" element={<AllUpcoming />} />
            </Routes>
        </BrowserRouter>
    </AuthProvider>
);