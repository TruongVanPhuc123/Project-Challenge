import React from 'react'
import MovieCard from '../components/MovieCard';
import '../css/MovieListSearch.css'
import Header from '../components/Header'
import Page from './Page';

function MovieSearchList({ dataSearch, page, handlePageChange }) {
    return (
        <>
            <Header />
            <div className='listSearchMovie'>
                <h2 style={{ paddingBottom: '20px' }}>Search Results</h2>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                    {dataSearch.map((movie) => (
                        movie.backdrop_path === null ? <></> :
                            <>
                                <MovieCard id={movie.id} title={movie.title} img={movie.poster_path} />
                            </>
                    ))}
                </div>
                {/* <Page /> */}
                <div className='btnGroup' style={{ display: "flex", alignItems: "center", paddingTop: "20px", gap: "10px" }}>
                    <button className='btn-login prev' disabled={page === 1} onClick={() => handlePageChange(page - 1)}>Prev</button>
                    <span style={{ fontSize: "2rem" }}>{page}</span>
                    <button className='btn-login next' disabled={dataSearch.length === 0} onClick={() => handlePageChange(page + 1)}>Next</button>
                </div>
            </div>
        </>
    )
}

export default MovieSearchList