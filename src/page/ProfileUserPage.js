import React, { useContext } from 'react'
import '../css/Profile.css'
import Header from '../components/content/Header'
import { AuthContext } from '../context/AuthContext'

function ProfileUserPage() {
    const user = window.localStorage.getItem('user')
    const state = useContext(AuthContext)
    console.log(state)
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
                    <table>
                        <tr className='top-tr'>
                            <th>Username</th>
                            <th>Password</th>
                            <th>IsAuthenticated</th>
                        </tr>
                        <tr className='bottom-tr'>
                            <td>{state.user}</td>
                            <td>{state.pass}</td>
                            <td>{JSON.stringify(state.isAuthenticated)}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProfileUserPage