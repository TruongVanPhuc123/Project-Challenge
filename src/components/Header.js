import * as React from 'react';
import '../css/Header.css'
import { AuthContext } from '../context/AuthContext'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import MovieSearch from './MovieSearch'

export default function Header({ page }) {
    const { user, logout } = React.useContext(AuthContext);
    const state = React.useContext(AuthContext)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className='container-head'>
            <div className='logo' onClick={handleClick} >
                <img src='https://platform.coderschool.vn/v2/static/img/coderschool-logo-compact.svg' width={50} />
                <span>CoderSchool</span>
            </div>
            <div className='user'>
                {user ?
                    <>
                        <div>
                            <div> Hi <span> {user?.username} </span> Welcome Back !</div>
                        </div>
                        <div className='inputGroup'>
                            <MovieSearch page={page} />
                        </div>
                    </>
                    :
                    <div>Welcome To My <span>Project Challenge</span></div>
                }
            </div>
            {state.isAuthenticated === false ?
                <div className='actionBtn'>
                    <Link to='/login'>
                        <button className='btn-login'>Login</button>
                    </Link>
                </div> :
                <Link to='/'>
                    <button className='btn-logout' onClick={logout}>Logout</button>
                </Link>
            }
        </div>
    );
}