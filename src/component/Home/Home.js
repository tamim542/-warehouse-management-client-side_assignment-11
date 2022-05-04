import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { map } from '@firebase/util';
const Home = () => {
  const [products, setProducts] = useProducts();
  const products1 = products.slice(1, 7);
  const navigate = useNavigate();

  const navigateToInventory = id => {
    const id1= id.toString();
    navigate(`/inventory/${id1}`)
  }

//-------extrea two section------

const [brand,setBrand]=useState([])
    
        useEffect(()=>{
            fetch('http://localhost:5000/productCount')
            .then(res=>res.json())
            .then(data=>setBrand(data))
          },[])
    


  return (
    <div>
      {/* --------carousel from bootstrap-------- */}

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.ibb.co/gZwMZ0J/xps-Gi3i-UJ1-Fwx-I-unsplash.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/qkSLGp4/close-up-modern-laptop-with-rate-charts-display-while-man-woman-working-business-project-design-comp.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/PCfZVTZ/self-isolation-design-mockup-23-2149062349.webp" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>

      {/* -----------Project Title----------- */}

      <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}><span style={{ color: 'green' }}>Latest Laptop</span> <span style={{ color: 'red' }}>Store House</span></h1>
      <br></br>

      {/* --------six item from homepage-------- */}
      <div className='card-design'>

        {
          products1.map(product => <div >
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
                <Button variant="primary" onClick={() => navigateToInventory(product._id)}>Update</Button>
              </Card.Body>
            </Card>
          </div>)
        }

      </div>
      <div className='div-button'>
        <Link to='/manageInventory'><button className='inventory-button'>Manage Inventory</button></Link>
      </div>

      {/* -------extrea two section------ */}
      <div className='extra-section1'>
        <div className='brand-div'>
        <h1 style={{color:'white',padding:'7px'}}>Total Brand: {brand.count}</h1>
        <div className='brand-name'>
         {
           products.map(product=><div style={{color:'white', padding:'7px'}}>{product.name} </div>)
         }
        </div>
        </div>
        <div className='brand-div img-banner'>
          <img  src='https://i.ibb.co/Ny2y8L7/black-friday-sale-banner-yellow-black-glued-paper-background-1361-3496.webp' style={{height:'280px', width:'298px'}} alt='...'/>
        </div>
        <div className='brand-div img-banner'>
        <img  src='https://i.ibb.co/s64X4mf/silver-label-best-product-year-1017-7340.webp' style={{height:'280px', width:'298px'}} alt='...'/>
        </div>
      </div>


    </div>
  );
};

export default Home;