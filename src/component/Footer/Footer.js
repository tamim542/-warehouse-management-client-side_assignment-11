import React from 'react';
import './Footer.css'
import facebook from '../../images/facebook.png';
import google from '../../images/google.png';
import twitter from '../../images/twitter.png';
import youtube from '../../images/youtube.png';
import instagram from '../../images/instagram.png';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 '>
            
            <div className='footer'>
                
            <p >Latest Laptop Store House</p>
            <p><small >copyright @ {year} </small></p>
           
            <img src={facebook} style={{borderRadius:'50%'}} alt='facebook'></img>
            <img src={google} style={{borderRadius:'50%', padding:'7px'}} alt='facebook'></img>
            <img src={twitter} style={{borderRadius:'50%', padding:'7px' }} alt='facebook'></img>
            <img src={youtube} style={{borderRadius:'50%', padding:'7px' }} alt='facebook'></img>
            <img src={instagram} style={{borderRadius:'50%', padding:'7px'}} alt='facebook'></img>
           
            </div>
        </footer>
    );
};

export default Footer;