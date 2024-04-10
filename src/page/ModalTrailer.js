import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../css/DetailMovie.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const style = {
    position: 'absolute',
    height: "100vh",
    width: '100%',
    background: 'rgba(255,255,255,0.1)',
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

export default function BasicModal({ id }) {
    console.log(id)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div onClick={handleOpen}> Play Trailer</div>
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
                    <iframe style={{ borderRadius: "3%" }} width="80%" height="600" src={`https://www.youtube.com/embed/${id}?si=ArDlKge3MvYobk0L&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </Box>
            </Modal>
        </>
    );
}