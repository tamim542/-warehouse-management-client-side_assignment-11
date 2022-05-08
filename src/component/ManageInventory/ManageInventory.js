import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageInventory.css';
import useProducts from '../../Hooks/useProducts';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shered/Loading/Loading';

const ManageInventory = () => {
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
        const supplier = event.target.supplier.value;
        const item = {email, name, img, price, description, quantity, supplier };
        fetch('https://afternoon-badlands-12006.herokuapp.com/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })

            .then(response => response.json())
            .then(data => console.log(data));

            event.target.reset();

    }

    //------------Delete item----------------

    const handleDelete = id =>{
        const deleteItem = window.confirm('Are you confirm to delete this item?');
        if(deleteItem){
            const url = `https://afternoon-badlands-12006.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    }

    return (
        <div style={{marginTop:'20px'}}>
            {/* --------all item from homepage-------- */}
            <div className='container'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 '>

                {
                    products.map(product => <div className='col'>
                        <div  className='card h-100'>
                        <Card style={{}}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title>Name: {product.name}</Card.Title>
                                <Card.Text>Price: {product.price}</Card.Text>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Card.Title>Quantity: {product.quantity}</Card.Title>
                                <Card.Title>Supplier Man: {product.supplier}</Card.Title>


                               <Button variant="danger" onClick={() => handleDelete(product._id)}>Delete</Button>

                               
                            </Card.Body>
                        </Card>
                        </div>
                    </div>)
                }
                </div>

            </div>
            {/* --------Add new item -------- */}

            <div className='form-center1'>
                <div >
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
                        <input type="text" name='supplier' className='input-feild' required />
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

export default ManageInventory;