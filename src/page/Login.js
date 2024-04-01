import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FTextField from '../components/FTextField'
import { useForm, Controller } from "react-hook-form";
import { LoadingButton } from '@mui/lab';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderradius: '5px',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const initialState = {
    username: '',
    password: '',
}

export default function BasicModal() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
    const { control, handleSubmit } = useForm({ initialState });
    const navigate = useNavigate()

    const { login, logout } = React.useContext(AuthContext)
    const onSubmit = (data) => {
        login(data.username)
        setOpen(false)
        navigate('/')
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FTextField label={"Username"} control={control} name="username" />
                        <FTextField label={"Password"} control={control} name="password" />
                        <LoadingButton
                            sx={{ width: "100%" }}
                            size="large"
                            type="submit"
                            variant="contained"
                            fullWidth
                        > Login</LoadingButton>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}