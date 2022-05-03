import React, { useRef, useState } from 'react';
import './Login.css'
import googleIcon from '../../images/Google_Icons.png'
import Loading from '../Shered/Loading/Loading';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
  
  const emailRef = useRef('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  let location = useLocation();
  let from = location.state?.from?.pathname || '/'
  const handleEmailField = (event) => {
    const email = event.target.value;
    setEmail(email);
  }
  const handlePassworField = (event) => {
    const password = event.target.value;
    setPassword(password);
  }

  if (error || errorGoogle) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading || loadingGoogle) {
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Loading></Loading></div>
  }
  if (user || userGoogle) {
    navigate(from, { replace: true });
  }

  const handleForm = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password)


  }

  
// reset password
const resetPassword = async () => {
  const email =emailRef.current.value;
  if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
      
  }
  else{
      //toast('please enter your email address');
      console.log('wrong hi');
  }
}


  return (
    <div>
      <div className='take-center'>
        <div className='login-form'>

          <form className='form-control' onSubmit={handleForm}>
            <h1 style={{ color: '#3a0abe' }}>Login</h1>
            <span>Email</span>
            <br />
            <input onBlur={handleEmailField} ref={emailRef} type="email" name='email' className='email-field' required />
            <br />

            <span>password</span>
            <br />

            <input onBlur={handlePassworField} type="password" name='pass' className='password-field' required />
            <br />
            <br />
            <button className='button-field'><span style={{ color: 'white', fontWeight: 'bold' }}>Login</span></button>
            <br />
          </form>
          <p>Latest Laptop Warehouse?<Link className='account-color' to="/signup">create an account</Link></p>
          <p>Forget Password? <span className='reset-password' onClick={resetPassword}>Reset Password</span> </p>
        </div>
      </div>



      <div className='social-login'>
        
        <div style={{ height: '1px', width: '15%' }} className='div-color'></div>
        <div> <p className=''>or</p></div>
        <div style={{ height: '1px', width: '17%' }} className='div-color'></div>
      </div>
      <div className='icon-blog'>
        <div className='social-icon'>
        <button
                    onClick={() => signInWithGoogle()}
                    className='rounded-1 border border-success mx-auto my-2'>
                    <img style={{ width: '30px' }} src={googleIcon} alt="" />
                    <span className='px-2 fw-bold'>Google Sign In</span>
                </button>
        </div>
        </div>
        
      
        <ToastContainer />
    </div>
  );
};

export default Login;