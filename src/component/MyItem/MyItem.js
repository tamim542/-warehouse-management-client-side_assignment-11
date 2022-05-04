import { Button, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../Axios/axiosPrivate';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
//import axios from 'axios';


const MyItem = () => {
    const [user] = useAuthState(auth);
    
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        
        const getItems = async() =>{
        //    const email = user.email;
        //     const url = `http://localhost:5000/item?email=${email}`;
         
        //       fetch(url)
        //       .then(res=>res.json())
        //       .then(data=>setItems(data))
            ///---------------
            const email = user.email;
            const url = `http://localhost:5000/item?email=${email}`;
            
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
console.log('items=',items);
    return (
        <div style={{ minHeight: '100vh'}}>
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