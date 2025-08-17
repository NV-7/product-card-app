import ProductCard from "./components/ProductCard";
import React, { createContext } from "react";
import "./App.css";
import { useState } from "react";

function App(){

  const [darkMode, setDarkMode] = useState('light');

  const toggleDarkMode = () => {
    setDarkMode((curr) => curr === 'dark' ? 'light' : 'dark');
  };
  
const urlImages = [
  "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
  "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGV0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdXNlfGVufDB8fDB8fHww"
];    

const products =  [
    {name: "Phone", price: 500, img: urlImages[0], inStock: true},
    {name: "Laptop", price: 200, img: urlImages[1], inStock: true},
    {name: "Tablet", price: 300, img: urlImages[2], inStock: false},
    {name: "Monitor", price: 400, img: urlImages[3], inStock: true},
    {name: "Mouse", price: 500, img: urlImages[4], inStock: true},
]

  return (
   <div id={darkMode} className="app-wrapper">
    <div className="button"> </div>
    <button onClick={toggleDarkMode}>
       {darkMode === 'dark' ? 'Light' : 'Dark'} 
    </button>
      <div className= "product-list" >
      {products.map((product) => <ProductCard product={product} />)}
      </div>
   </div>
    
  );

}
export default App