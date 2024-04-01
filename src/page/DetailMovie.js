import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/DetailMovie.css';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    color: 'white',
    bgcolor: 'rgba(0, 0, 0, 0.5)',
    p: "20%",
};

export default function BasicModal() {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false)
    };
    const handleOpen = () => setOpen(true);

    const [dataID, setDataID] = React.useState([])
    const [dataGenres, setDataGenres] = React.useState([])
    const params = useParams()
    const movieId = params.id
    console.log(dataID)

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5be5d338bfe89e06c31e5034b37b82d2`)
            .then(response => {
                setDataID(response.data)
                setDataGenres(response.data.genres)
            })
            .catch(err => console.log(err.message))
        // console.log(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5be5d338bfe89e06c31e5034b37b82d2`)
    }, [movieId])

    return (
        <div>
            <button className='detailMovie' onClick={handleOpen}>Detail</button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='close-modal' onClick={() => handleClose()}>
                        <CloseIcon />
                    </div>
                    <div className='container-modal'>
                        <div className='modal-img-name'>
                            <img src={`https://image.tmdb.org/t/p/w500` + dataID.backdrop_path} />
                            <span className='modal-title'>{dataID.title}</span>
                        </div>
                        <div className='modal-overview'>
                            {dataID.overview}
                            <div className='genres' style={{ display: "flex", gap: '30px', paddingTop: '10px' }}>
                                {dataGenres.map(genres => (
                                    <span>{genres.name}</span>
                                ))}
                            </div>
                        </div>

                    </div>

                </Box>
            </Modal>
        </div>
    );
}