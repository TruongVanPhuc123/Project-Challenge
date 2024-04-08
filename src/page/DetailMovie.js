import * as React from 'react';
import '../css/DetailMovie.css';
import Header from '../components/Header'
import GradeIcon from '@mui/icons-material/Grade';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function DetailMovie({ dataID, dataGenres, date }) {
    const handleBack = () => {
        // navigate('/')
    }

    return (
        <>
            <Header />
            <div className='container-modal'>
                {/* <div className='back-detail' onClick={handleBack}>
                    <p><KeyboardBackspaceIcon /></p>
                </div> */}
                <div className='group-detail'>
                    <div className='img-group-detail'>
                        <img src={`https://image.tmdb.org/t/p/w500` + dataID.backdrop_path} />
                        <div className='drop-detail'></div>
                    </div>
                    <div className='bottom-detail'>
                        <div className='overview-group-detail'>
                            <div className='title-date-genres-overview-detail'>
                                <div className='title-detail'><h3>{dataID.title}</h3> <p>{date.slice(0, 4)}</p></div>
                                <div className='genres-detail'>
                                    {/* <span> */}
                                    {dataGenres.map((genres) => <p>{genres.name + ","}</p>)}
                                    {/* </span> */}
                                </div>
                                <div className='overview-detail'>{dataID.overview}</div>
                            </div>
                        </div>
                        <div className='action-detail'>
                            <button className='btn-login play-detail'>Play Movie</button>
                        </div>
                    </div>
                    <div className='rated-detail'>
                        <p className='vote-detail'>Vote: {dataID.vote_average}</p>
                        <p className='icon-detail'><GradeIcon fontSize='0.75rem' /></p>
                    </div>
                </div>
            </div>

        </ >
    );
}