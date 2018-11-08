import React from 'react';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import '../../App.css'

const Nav = () => {
    return (
        <div className='Nav-header'>
            <Link to={`/`}>
                <img src={Logo} alt='Logo' className='Nav-img' />
            </Link>
        </div>
    )
}

export default Nav