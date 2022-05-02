import { Button, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';


const MyItem = () => {
    const [user] = useAuthState(auth);
    
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        
        const getItems = async() =>{
           const email = user.email;
            const url = `http://localhost:5000/item?email=${email}`;
         
              fetch(url)
              .then(res=>res.json())
              .then(data=>setItems(data))
            
            
        }
        getItems();

    }, [user])

     //------------Delete item----------------

     const handleDelete = id =>{
        const deleteItem = window.confirm('Are you confirm to delete this item?');
        if(deleteItem){
            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })
        }
    }

    return (
        <div>
            {/* --------all item from homepage-------- */}
            <div className='card-design'>

                {
                    items.map(item => <div >
                        <Card style={{}}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>Name: {item.name}</Card.Title>
                                <Card.Text>Price: {item.price}</Card.Text>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Title>Quantity: {item.quantity}</Card.Title>
                                <Card.Title>Supplier Man: {item.suppliernam}</Card.Title>


                               <Button variant="danger" onClick={() => handleDelete(item._id)}>Delete</Button>

                               
                            </Card.Body>
                        </Card>
                    </div>)
                }

            </div>
        </div>
    );
};

export default MyItem;