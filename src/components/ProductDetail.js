import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products.json";
const ProductDetail = () => {
  const { id: idUrl } = useParams();
  // console.log(idUrl);
  // console.log(products);
  const product = products.find((product) => {
    return product.id == idUrl;
  });

  console.log(product);

  return (
    <div>
      <h2>ProductDetail</h2>
      <p>Product name: {product.name}</p>
      <p>Product price: {product.price}</p>
      <Link to="/products">
        <button>Back to Products</button>
      </Link>
    </div>
  );
};

export default ProductDetail;
// param url
