

import React from "react";
import SingleProduct from "../Pages/singleproduct";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewDish = () => {
  const [dish, setProducts] = React.useState([]);
  const getData = () => {
    axios
      .get("http://localhost:3030/dish")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);
  return (
    <div>
        
      <h1>Items Available</h1>
          {dish.map((dish, index) => (
            <SingleProduct key={index} dish={dish} />
          ))}
    </div>
  );
};
export default ViewDish;