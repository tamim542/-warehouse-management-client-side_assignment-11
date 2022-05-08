import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css';
import useToken from '../../Hooks/useToken';
const SignUp = () => {
  
   
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [error1, setError1] = useState('');
        const navigate=useNavigate();
        const [
          createUserWithEmailAndPassword,
          user
          
        ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
        const [token] = useToken(user);
        // if (error) {
        //   return (
        //     <div>
        //       <p>Error: {error.message}</p>
        //     </div>
        //   );
        // }
        // if (loading) {
        //   return <p>Loading...</p>;
        // }
        const handleEmailField=(event)=>{
                const email=event.target.value;
                setEmail(email);
        }
        const handlePassworField=(event)=>{
                const password=event.target.value;
                setPassword(password);
        }
        const handleConfirmPassworField=(event)=>{
                const confirm=event.target.value;
                setConfirmPassword(confirm);
        }
        if (token) {
            navigate('/home');
        }
        const handleForm=(event)=>{
            event.preventDefault();
            if(password !== confirmPassword){
                setError1('passwords did not match');
                return;
            }
            if(password.length <8){
                setError1('Password must be 8 characters or longer');
                return;
            }
            
            createUserWithEmailAndPassword(email, password);

        } 
   
    return (
        <div >
            <h1>{error1}</h1>
            <div className='signup-center'>
            <div className='signUp-form'>
            <form className='form-control' onSubmit={handleForm}>
                
                <h1 style={{color:'#31c75e'}}>SignUP</h1>
                <span>Email</span>
                <br/>
                <input onBlur={handleEmailField} type="email" name='email' id='email-form' required/>
                <br/>
                
                <span>password</span>
                <br/>
                
                <input onBlur={handlePassworField} type="password" name='password' id='password-form' required/>
                <br/>
                <br/>
                <span>Confirm password</span>
                <br/>
                <input onBlur={handleConfirmPassworField} type="password" name='confirm' id='password-form' required/>
                <br/>
                <br/>
                <button className='button-form'><span style={{color:'white'}}>Sign Up</span></button>
                <br/>
            </form>
            <p>Have an already account?<Link className='login-color' to="/login"> Login</Link></p>
            </div>
            </div>
        </div>
    );
};

export default SignUp;