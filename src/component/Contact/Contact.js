import React from 'react';
import useProducts from '../../Hooks/useProducts';
import './Contact.css';
const Contact = () => {
    
    const handleForm = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const phone = event.target.phone.value;
       
        const comment = event.target.comment.value;
        
        const item = { email, phone, comment};
        fetch('http://localhost:5000/contactform', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })

            .then(response => response.json())
            .then(data => console.log(data));

    }

    return (
        <div>
            

            <div className='form-center'>
                <div className='input-form'></div>
                <form className='form-control' onSubmit={handleForm}>

                    <h1 style={{ color: '#31c75e' }}>Contact Form</h1>
                    <span>Email</span>
                    <br />
                    <input type="email" name='email' className='input-feild' required />
                    <br />
                    <span>Phone No.</span>
                    <br />
                    <input type="text" name='phone' className='input-feild' required />
                    <br />

                   
                    <span>Comment Box</span>
                    <br />
                    <input type="text" name='comment' className='input-feild' required />
                    <br />
                    <br />
                 
                    <button className='button-form'><span style={{ color: 'white' }}>Submit</span></button>
                    <br />
                </form>
            </div>

        </div>
    );
};

export default Contact;