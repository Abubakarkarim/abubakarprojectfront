

import React from "react";
import SingleProduct from "../Pages/singleproduct";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

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
            <div>
            
            <SingleProduct key={index} dish={dish} />
            </div>
          ))}
    </div>
  );
};
export default ViewDish;