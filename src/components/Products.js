import React from "react";
import products from "../data/products.json";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const nav = useNavigate();

  const handleToDetail = (id) => {
    nav("/products/" + id);
  };

  return (
    <div>
      <h3>Products</h3>
      <div className="products d-flex flex-wrap ">
        {products.map((product, index) => {
          return (
            <div
              key={product.id}
              style={{ border: "2px black solid" }}
              className="w-50"
            >
              <p>
                {index + 1}: Name: {product.name}
              </p>
              <p>Price: {product.price}</p>
              <button onClick={() => handleToDetail(product.id)}>
                to Detail
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
