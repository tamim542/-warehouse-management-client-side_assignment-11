import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='nav-bar'>
                <nav className='header'>
                   
                        <Link className='link-decoration' to="/">Home</Link>
                        <Link className='link-decoration' to="/blog">Blog</Link>
                    
                </nav>
            </div>
        </div>
    );
};

export default Header;