import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Dummy = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <nav className='header'>

                        <Link className='link-decoration' to="/">Home</Link>
                        <Link className='link-decoration' to="/blog">Blog</Link>
                        <Link className='link-decoration' to="/about">About</Link>
                        <Link className='link-decoration' to="/contact">Contact</Link>
                        {/* <Link className='link-decoration' to="/login">Login</Link> */}
                        {
                            user ? <span><Link className="link-decoration" to="/manageitem">MangeItem</Link><Link className="link-decoration" to="/additem">AddItem</Link><Link className="link-decoration" to="/myitem">MyItem</Link> <button className="signOut-button" onClick={handleSignOut}>Signout</button></span> : <Link className="link-decoration" to="/login">Login</Link>
                        }

                    </nav>
                </nav>

            </div>
        </div>
    );
};

export default Dummy;