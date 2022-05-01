import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageInventory.css';
import useProducts from '../../Hooks/useProducts';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();

    //----------- add item -------------

    const handleForm=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const img=event.target.img.value;
        const price=event.target.price.value;
        const description=event.target.description.value;
        const quantity=event.target.quantity.value;
        const suppliernam=event.target.suppliernam.value;
       const item={name,img,price,description,quantity,suppliernam};
       fetch('http://localhost:5000/products', { method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(item)
    })
    
       .then(response => response.json())
       .then(data => console.log(data));

    }

    return (
        <div>
            {/* --------six item from homepage-------- */}
            <div className='card-design'>

                {
                    products.map(product => <div >
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
                                <Link to='/inventory'> <Button variant="danger">Delete</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>)
                }

            </div>
             {/* --------Add new item -------- */}

             <div className='form-center'>
            <div className='input-form'>
            <form className='form-control' onSubmit={handleForm}>
                
                <h1 style={{color:'#31c75e'}}>Add New Item</h1>
                <span> Brand Name</span>
                <br/>
                <input  type="text" name='name' className='input-feild' required/>
                <br/>
                
                <span>Image</span>
                <br/>
                
                <input  type="text" name='img' className='input-feild' required/>
                <br/>
                <br/>
                <span>Price</span>
                <br/>
                <input type="text" name='price' className='input-feild' required/>
                <br/>
                <br/>
                <span>Description</span>
                <br/>
                <input type="text" name='description' className='input-feild' required/>
                <br/>
                <br/>
                <span>Quantity</span>
                <br/>
                <input type="number" name='quantity' className='input-feild' required/>
                <br/>
                <br/>
                <span>Supplier Name</span>
                <br/>
                <input type="text" name='suppliernam' className='input-feild' required/>
                <br/>
                <br/>
                <button className='button-form'><span style={{color:'white'}}>Add Item</span></button>
                <br/>
            </form>
            
            </div>
            </div>


        </div>
    );
};

export default ManageInventory;