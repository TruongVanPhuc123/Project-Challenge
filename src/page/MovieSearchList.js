import React from 'react'
import MovieCard from '../components/renderMovie/MovieCard';
import '../css/MovieListSearch.css'
import Header from '../components/content/Header'
import NextPrevBtn from '../components/button/NextPrevBtn';

function MovieSearchList({ dataSearch, page, handlePageChange }) {
    return (
        <>
            <Header />
            <div className='listMovie'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', paddingBottom: '20px' }}>
                    <div>
                        <h2>
                            <span>Search Results</span>
                        </h2>
                    </div>
                    <div><NextPrevBtn data={dataSearch} page={page} handlePageChange={handlePageChange} /></div>
                </div>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                    {dataSearch.map((movie) => (
                        movie.backdrop_path === null ? <></> :
                            <>
                                <MovieCard id={movie.id} title={movie.title} img={movie.poster_path} />
                            </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MovieSearchList