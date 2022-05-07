import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import './Inventory.css'

const Inventory = () => {

    const id = useParams().id;
   
    const [inventory, setInventory] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventory])



    ///---------------update delivered--------------

    const handleDelivered = (id) => {
       
      
        const {quantity, ...rest} = inventory;
        let quantity1 = parseInt(quantity);
        let quantity2=quantity1-1;
        

        const updatedDelivered = {quantity:quantity2,...rest};
        console.log(updatedDelivered);
        // put data to the server
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( updatedDelivered )
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Quantity Reduce one Successfully');
            })
                // event.target.reset();
           // })
    
        }
    //--------------add quantity-------------------
   const addQuantity=(event)=>{
       event.preventDefault();
       const {quantity, ...rest} = inventory;
       let quantity1 = parseInt(quantity);
    const quantityInput = event.target.quantity.value;
    const quantityInt=parseInt(quantityInput);
    const quantityAdd=quantityInt+quantity1;
    

    const updatedQuantity = {quantity:quantityAdd,...rest};
    console.log(updatedQuantity);
    // put data to the server
    const url = `http://localhost:5000/quantity/${id}`;
    console.log('id',url)
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify( updatedQuantity )
    })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('Quantity Add Successfully');
        })

        //reset field
             event.target.reset();


   }
    
    
            

    return (
        <div>
            {/* --------six item from homepage-------- */}
            <div >

                <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-3 card-item card-align'>
                    <div className='col'>
                        <div className='card h-100'>
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
                                <Button variant="primary" onClick={() => handleDelivered(inventory._id)}>Delivered</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                </div>

                 {/* --------------Add quantity------------ */}
                <div className='text-center quantity-button'>
                   <form onSubmit={addQuantity}>
                    <input type="number" name='quantity' className='quantity-feild' required />
                     <button className='button-quantity-add'>Add Quantity</button>  
                    </form>
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
