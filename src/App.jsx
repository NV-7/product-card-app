import ProductCard from "./components/ProductCard";

function App(){

var price = [100,200,300,400,500,600,700,800,900,1000];


const products =  [
    {name: "Phone", price: 100, img: "https://png.pngtree.com/png-vector/20241203/ourmid/pngtree-mobile-phone-frame-photo-png-image_14568670.png", inStock: true},
    {name: "Laptop", price: 200, img: "https://via.placeholder.com/150", inStock: true},
    {name: "Tablet", price: 300, img: "https://via.placeholder.com/150", inStock: false},
    {name: "Monitor", price: 400, img: "https://via.placeholder.com/150", inStock: true},
    {name: "Mouse", price: 500, img: "https://via.placeholder.com/150", inStock: true},
]

  return (
   <div>
    {products.map((product) => <ProductCard product={product} />)}
    </div>
  );

}
export default App