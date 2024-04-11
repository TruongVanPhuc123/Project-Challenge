import React from 'react'
import { useNavigate } from 'react-router-dom'
import ListGenres from '../genres/ListGenres'

const styles = {
    display: 'flex',
    alignItems: 'center',
    color: "white",
    fontWeight: "bold",
    gap: "10px",
    cursor: "pointer",
}

function Navbar() {
    const [open, setOpen] = React.useState(false)
    const navigate = useNavigate()

    return (
        <div style={styles} >
            <div onClick={() => navigate('/')}>Home </div>
            <div onClick={() => { setOpen(!open) }}>Genres</div>
            <div className={`${open ? 'active' : 'inactive'}`}>
                <ListGenres />
            </div>
        </div>
    )
}

export default Navbar