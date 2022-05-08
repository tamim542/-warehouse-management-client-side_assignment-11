import { Button, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../Axios/axiosPrivate';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
//import axios from 'axios';
import './MyItem.css';

const MyItem = () => {
    const [user] = useAuthState(auth);
    
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        
        const getItems = async() =>{
        //    const email = user.email;
        //     const url = `https://afternoon-badlands-12006.herokuapp.com/item?email=${email}`;
         
        //       fetch(url)
        //       .then(res=>res.json())
        //       .then(data=>setItems(data))
            ///---------------
            const email = user?.email;
            const url = `https://afternoon-badlands-12006.herokuapp.com/item?email=${email}`;
            
              try{
                // const {data} = await axios.get(url,{
                //     headers:{
                //         authorization:`Bearer ${localStorage.getItem('accessToken')}`
                    
                //     }
                const {data} = await axiosPrivate.get(url);
                setItems(data);
                console.log('items={what}');
                }
             
                //setItems(data);
              catch(error){
                  console.log('error Message=',error.message);
                  if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
              }
            
           
            
        }
        getItems();

    }, [user])

     //------------Delete item----------------

     const handleDelete = id =>{
        const deleteItem = window.confirm('Are you confirm to delete this item?');
        if(deleteItem){
            const url = `https://afternoon-badlands-12006.herokuapp.com/items/${id}`;
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
console.log('items=',items);
    return (
        <div style={{ minHeight: '100vh'}} className='container card-margin'>
            {/* --------all item from homepage-------- */}
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>

                {
                    items.map(item => <div className='col'><div className='card h-100'>
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
                    </div></div>)
                }

            </div>
        </div>
    );
};

export default MyItem;