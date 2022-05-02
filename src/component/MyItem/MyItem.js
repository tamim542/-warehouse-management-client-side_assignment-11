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
    return (
        <div>
           {
               items.map(item=><li>{item.name}</li>)
           }

        </div>
    );
};

export default MyItem;