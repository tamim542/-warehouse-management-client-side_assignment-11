import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../Hooks/useProducts';
import Loading from '../Shered/Loading/Loading';
import './AddItem.css';
const AddItem = () => {
    const [products, setProducts] = useProducts();
    const [user,loading] = useAuthState(auth);
    

    if (loading) {
        return <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Loading></Loading></div>
    }

   

    //----------- add item -------------

    const handleForm = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const img = event.target.img.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const quantity = event.target.quantity.value;
        const suppliernam = event.target.suppliernam.value;
        const item = {email, name, img, price, description, quantity, suppliernam };
        fetch('https://afternoon-badlands-12006.herokuapp.com/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })

            .then(response => response.json())
            .then(data => setProducts(data));

            event.target.reset();

    }

    return (
        <div>
             {/* --------Add new item -------- */}

             <div className='form-center'>
                <div className='input-form'>
                    <form className='form-control' onSubmit={handleForm}>

                        <h1 style={{ color: '#31c75e' }}>Add New Item</h1>
                        <span>Email</span>
                        <br />
                        <input type="email" name='email' className='input-feild' value={user.email} readOnly required />
                        <br />
                        <span> Brand Name</span>
                        <br />
                        <input type="text" name='name' className='input-feild' required />
                        <br />

                        <span>Image</span>
                        <br />

                        <input type="text" name='img' className='input-feild' required />
                        <br />
                        <br />
                        <span>Price</span>
                        <br />
                        <input type="text" name='price' className='input-feild' required />
                        <br />
                        <br />
                        <span>Description</span>
                        <br />
                        <input type="text" name='description' className='input-feild' required />
                        <br />
                        <br />
                        <span>Quantity</span>
                        <br />
                        <input type="number" name='quantity' className='input-feild' required />
                        <br />
                        <br />
                        <span>Supplier Name</span>
                        <br />
                        <input type="text" name='suppliernam' className='input-feild' required />
                        <br />
                        <br />
                        <button className='button-form'><span style={{ color: 'white' }}>Add Item</span></button>
                        <br />
                    </form>

                </div>
            </div>


           



        </div>
    );
};

export default AddItem;