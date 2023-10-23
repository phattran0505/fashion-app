import { useContext } from "react";

import { ProductContext } from "../../contexts/ProductContext";
import Product from "../../components/product/Product";
import "./Home.css";
import Poster from "../../components/poster/Poster";
function Home() {
  // get data from ProductContext
  const { products } = useContext(ProductContext);
  // filter men and women clothing
  const productsList = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <>
      <Poster />
      <div className="container">
        <div className="cart_container">
          {productsList.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
