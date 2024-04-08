import * as React from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom'

export default function SimpleAlert({ state }) {
    const navigate = useNavigate()
    return (
        <>
            {
                state.isAuthenticated === true ?
                    <Alert severity="success">Login Complete</Alert>
                    :
                    <Alert severity="error">Login Complete</Alert>
            }
        </>
    );
}