import React, { useContext } from 'react'
import '../css/Profile.css'
import Header from '../components/content/Header'

function ProfileUserPage() {
    const user = window.localStorage.getItem('user')
    const pass = window.localStorage.getItem('password')
    const login = window.localStorage.getItem('isLogin')

    return (
        <>
            <Header />
            <div className='container-profile'>
                <div className='h2-profile'>
                    <h2>
                        Hello <span>{user}</span>, Welcome To Profile Page !
                    </h2>
                </div>
                <div className='table-profile'>
                    <div className='profile'>
                        <span>Email</span>
                        <p>{user}</p>
                    </div>
                    <div className='profile'>
                        <span>Password</span>
                        <p>{pass}</p>
                    </div>
                    <div className='profile'>
                        <span>IsAuthenticated</span>
                        <p>{login}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileUserPage