import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useProducts from '../../Hooks/useProducts';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shered/Loading/Loading';

const Home = () => {


  //  ///loading spinner
  //  const [
  //   signInWithEmailAndPassword,
  //   user,
  //   loading,
  //   error,
  // ] = useSignInWithEmailAndPassword(auth);
  // if (loading ) {
  //   <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Loading></Loading></div>
  // }else{

  const [products, setProducts] = useProducts();
  const products1 = products.slice(1, 7);

  const data1=products.slice(0,4);
   const data2=products.slice(4,8);

  const navigate = useNavigate();

  const navigateToInventory = id => {
    const id1= id.toString();
    navigate(`/inventory/${id1}`)
  }


//-------extrea two section------

const [brand,setBrand]=useState([])
    
        useEffect(()=>{
            fetch('https://afternoon-badlands-12006.herokuapp.com/productCount')
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

      {/* --------six item from homepage---card-design ------- */}
      <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
      
        {
          products1.map(product => <div className='col'> <div className='card h-100'>
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
          </div></div>)
        }
      
      </div>
      <div className='div-button'>
        <Link to='/manageInventory'><button className='inventory-button'>Manage Inventory</button></Link>
      </div>

      

      {/* -------extrea one section------ */}
      <br></br>
      <h3 style={{ fontWeight: 'bold', textAlign: 'center' }}><span style={{ color: 'green' }}>History of Company</span> </h3>
      <br></br>
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
          <br></br>
          {/* extra section two */}

          <h3 style={{ fontWeight: 'bold', textAlign: 'center' }}><span style={{ color: 'green' }}>Graphical View of Record</span> </h3>
      <br/>
         
            <div className='dashboard-chart'>
              <div className='bar-chart'>
            <LineChart  width={600} height={300} data={products}>
            <Line type="monotone" dataKey="quantity" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
            </LineChart>
        
            </div>
            
            {/* <BarChart -------------- */}
            <div className='bar-chart'>
            <BarChart
           
          width={500}
          height={300}
          data={products}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity" fill="#8884d8" background={{ fill: '#eee' }} />
          <Bar dataKey="price" fill="#82ca9d" />
        </BarChart>
        </div>
          <div className='bar-chart'>


        <AreaChart 
       
          width={500}
          height={400}
          data={products}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="price" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="quantity" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>

        </div>
          <div className='bar-chart'>

        <PieChart width={500} height={500}>
          <Pie data={data1} dataKey="quantity" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data2} dataKey="quantity" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>

         </div>
         </div>
    </div>
  );
};

export default Home;