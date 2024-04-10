import React from 'react'
import MovieCard from './MovieCard';
import NextPrevBtn from '../button/NextPrevBtn';
import '../../css/MovieListSearch.css'

function ListMovie({ title, dataSearch }) {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', paddingBottom: '20px' }}>
                <div>
                    <h2>
                        <span>{title}</span>
                    </h2>
                </div>
                <div><NextPrevBtn dataSearch={dataSearch} /></div>
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
    )
}

export default ListMovie