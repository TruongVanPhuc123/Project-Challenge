import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom'
import '../css/Header.css'

function ModalAccount({ user, logout }) {
    const navigate = useNavigate()

    return (
        <div className='container-Account'>
            <div className='props'>Hi <span>{user}</span></div>
            <div className='props' onClick={() => navigate('/profile')}>My Profile</div>
            <div onClick={logout} className='props' style={{ display: "flex", alignItems: 'center', justifyContent: 'center', gap: '10px' }}><LogoutIcon /> Logout</div>
        </div>
    )
}

export default ModalAccount