import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';

function ModalAccount({ state, user, logout }) {
    return (
        <div className='container-Account'>
            <div className='props'>Hi <span>{user.username}</span></div>
            <div className='props'>My Profile</div>
            <div onClick={logout} className='props' style={{ display: "flex", alignItems: 'center', gap: '10px' }}><LogoutIcon /> Logout</div>
        </div>
    )
}

export default ModalAccount