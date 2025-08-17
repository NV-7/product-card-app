import '../css/ProductCard.css';
// filepath: c:\Users\Tommy\Desktop\product-card-app\src\components\ProductCard.jsx

function ProductCard({product}) {

    return (
    <div className="product-card"> 

        <div className ="product-image">
            <img src={product.img} alt={product.name} />
        </div>

        <div className= 'product-details'> 
            < div className="product-name">
                <h2>{product.name}</h2>
            </div>
            <div className="product-price">
                <h3> {product.inStock === true ? 'Price: $' + product.price: "Not in Stock"}</h3> 
            </div>
        </div>

     </div>
    )
}

export default ProductCard;