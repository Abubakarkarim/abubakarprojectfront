

import React from "react";

import axios from "axios";
import { Link, withRouter } from "react-router-dom";

const ViewCustomer = () => {
  const [dish, setProducts] = React.useState([]);
  const getData = () => {
    axios
      .get("http://localhost:3030/customer")
      .then((res) => {
        //setProducts(res.data);
        console.log(res);
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);
  return (
    <div>
        
      <h1>Customers</h1>

      {dish.map((item,index)=>{
      return  <>
        <h2>Name:</h2>
      <h3>{item.name}</h3>
      <h2>Phone no:</h2>
      <div>{item.phNo}</div>
      <h2>Email Adress:</h2>
      <div>{item.address}</div>
      </>
      })}
         
    </div>
  );
};
export default withRouter(ViewCustomer)