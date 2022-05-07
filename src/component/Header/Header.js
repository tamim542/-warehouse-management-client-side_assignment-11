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


            {/* new header test ------------*/}
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                    <div className="container-fluid ps-5 pe-5">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item link-decoration">
                                    <Link className="nav-link text-light " aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light link-decoration" aria-current="page" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light link-decoration" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light link-decoration" to="/contact">Contact</Link>
                                </li>
                                
                                
                                    {
                                    
                                        user?<span className='route'><li className="nav-item"><Link className="nav-link text-light link-decoration" to="/manageitem">MangeItem</Link></li><li className="nav-item"><Link className="nav-link text-light link-decoration" to="/additem">AddItem</Link></li>
<li className="nav-item"><Link className="nav-link text-light link-decoration" to="/myitem">MyItem</Link></li><li className="nav-item"> <button className="signOut-button nav-link link-decoration" onClick={handleSignOut}>Signout</button></li></span> : <li className="nav-item"> <Link className="nav-link text-light link-decoration" to="/login">Login</Link></li>
                                    
                                     }
                                

                               

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>



           
        </div>
    );
};

export default Header;