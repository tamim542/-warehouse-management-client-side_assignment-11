import React from 'react';
import { Link } from 'react-router-dom';
import './ManageItem.css';
const ManageItem = () => {
    return (
        <div style={{ minHeight: '100vh'}}>
             <div className='div-button'>
        <Link to='/manageInventory'><button className='inventory-button'>Manage Inventory</button></Link>
      </div>
        </div>
    );
};

export default ManageItem;