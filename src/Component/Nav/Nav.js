import React from 'react';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import '../../App.css'

const Nav = () => {
    return (
        <div class='Nav-header'>
            <Link to={`/`}>
                <img src={Logo} alt='Logo' class='Nav-img' />
            </Link>
        </div>
    )
}

export default Nav