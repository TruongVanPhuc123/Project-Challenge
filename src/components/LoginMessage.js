import React from 'react'
import FAlert from '../components/FAlert'
import { AuthContext } from '../context/AuthContext'

const style = {
    position: 'fixed',
    zindex: '100',
    top: '12%',
    right: '8%',
}

function LoginMessage() {
    const state = React.useContext(AuthContext)
    console.log(state)
    return (
        <div className='content-alert' style={style}>
            <FAlert state={state} />
        </div>
    )
}

export default LoginMessage