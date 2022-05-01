import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <div className='nav-bar'>
                <nav className='header'>

                    <Link className='link-decoration' to="/">Home</Link>
                    <Link className='link-decoration' to="/blog">Blog</Link>
                    {/* <Link className='link-decoration' to="/login">Login</Link> */}
                    {
                        user ? <button className="signOut-button" onClick={handleSignOut}>Signout</button> : <Link className="link-decoration" to="/login">Login</Link>
                    }

                </nav>
            </div>
        </div>
    );
};

export default Header;