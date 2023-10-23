import { useParams } from "react-router-dom";
import { useContext } from "react";

import { ProductContext } from "../../contexts/ProductContext";
import { CartContext } from "../../contexts/CartContext";

import "./ProductDetail.css";
function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  
  const product=products.find(item=>{
    return item.id===parseInt(id)
  })
  if (!product){
    return <section className="loading">
        Loading...
    </section>
  }
  return <div className="product-detail">
    <div className="detail_image">
        <img src={product.image} alt="no-pics"></img>
    </div>
    <div className="info">
        <h1 className="product-detail_title">{product.title}</h1>
        <span className="product-detail_price">$ {product.price}</span>
        <p className="product-detail_description">{product.description}</p>
        <button onClick={()=>addToCart(product,product.id)}>Add to cart</button>
    </div>
  </div>;
}

export default ProductDetail;
