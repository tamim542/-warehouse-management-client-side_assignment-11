import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import './Inventory.css'

const Inventory = () => {

    const id = useParams().id;
    console.log('what', id);
    const [inventory, setInventory] = useState({})
   
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])

   

///---------------update delivered--------------

const handleDelivered = (quantity,id) =>{
   
    const quantityInt = parseInt(quantity);
    const quantity1 = quantityInt-1;

    const updatedDelivered = {quantity1};

   // put data to the server
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedDelivered)
    })
    .then(res => res.json())
    .then(data =>{
        console.log('success', data);
        alert('users added successfully!!!');
        // event.target.reset();
    })
}



    return (
        <div>
            {/* --------six item from homepage-------- */}
            <div className='flex-item'>

                <div className='card-item'>
                <div>
                    <Card style={{}}>
                        <Card.Img variant="top" src={inventory.img} />
                        <Card.Body>
                            <Card.Title>Name: {inventory.name}</Card.Title>
                            <Card.Text>Price: {inventory.price}</Card.Text>
                            <Card.Text>
                                {inventory.description}
                            </Card.Text>
                            <Card.Title>Quantity: {inventory.quantity}</Card.Title>
                            <Card.Title>Supplier Man: {inventory.supplier}</Card.Title>
                            <Button variant="primary" onClick={() => handleDelivered(inventory.quantity,inventory._id)}>Delivered</Button>
                        </Card.Body>
                    </Card>
                </div>
                </div>
                <div className='text-center'>
                <input type="number" name='quantity' className='quantity-feild' required />
                <button className='button-quantity-add'>Add Quantity</button>
            </div>

            </div>

            

            {/* ----------Manage Inventory section---------- */}

            <div className='div-button'>
                <Link to='/manageInventory'><button className='inventory-button'>Manage Inventory</button></Link>
            </div>


        </div>
    );
};

export default Inventory;
