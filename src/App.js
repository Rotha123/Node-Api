import logo from './logo.svg';
import axios from 'axios' 
import React, { useState, useEffect } from 'react'
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function App() {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    const url = "http://localhost:3000/api/product";
     fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
  
  return (
    <div>
      <h1>Product</h1>
       <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
      {products.map(product => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.Quantity}</p>
          <p>{product.price}</p>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <img src={product.image} width={200}/>
          <Button variant="contained">view</Button>
          </div>
        </div>
      ))}
    
    </div>
    </div>
   
  );
  }

export default App;
