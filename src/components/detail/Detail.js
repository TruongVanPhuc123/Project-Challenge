import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../../css/DetailMovie.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import GradeIcon from '@mui/icons-material/Grade';
import DataTrailer from '../trailer/DataTrailer';

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100vh"
};

export default function BasicModal({ dataID, dataGenres, date }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div >
            <button onClick={handleOpen} className='btn-login detail' >Detail</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={style}>
                    <div className='back-detail' onClick={handleClose}>
                        <p><KeyboardBackspaceIcon /></p>
                    </div>
                    <Box className='group-detail '>
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
                            <div>
                                <div className='text-right-detail'>
                                    <div className='id'>
                                        Movie ID: {dataID.id}
                                    </div>
                                    <div className='popularity'>
                                        Popularity : {dataID.popularity}
                                    </div>
                                    <div className='voteCount'>
                                        Vote Count: {dataID.vote_count}
                                    </div>
                                </div>
                                <div className='action-detail'>
                                    <span className='playTrailer'><DataTrailer id={dataID.id} /></span>
                                    <button className='btn-login play-detail'>Play Movie</button>
                                </div>
                            </div>
                            <div className='rated-detail'>
                                <p className='vote-detail'>Vote: {dataID.vote_average}</p>
                                <p className='icon-detail'><GradeIcon fontSize='0.75rem' /></p>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}