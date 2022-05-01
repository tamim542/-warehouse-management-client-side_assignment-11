import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Inventory = () => {

//     const { inventoryId } = useParams();
//     console.log('what',inventoryId);
//     const [inventory, setInventory] = useState('')
//    useEffect(()=>{
//        const url=`http://localhost:5000/products/${inventoryId}`
//        fetch(url)
//        .then(res=>res.json())
//         .then(data=>setInventory(data))
//    },[])

    return (
        <div>
            <h2>Welcome to detail: </h2>
            <div className='text-center'>

                <button className='btn btn-primary'>Proceed Checkout</button>
            </div>

            {/* ----------Manage Inventory section---------- */}

            <div className='div-button'>
           <Link to='/manageInventory'><button className='inventory-button'>Manage Inventory</button></Link> 
        </div>


        </div>
    );
};

export default Inventory;
