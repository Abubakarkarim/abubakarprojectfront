import React from "react";
import { Button } from "@material-ui/core";
import Axios from "axios";
const Singleproduct = ({ dish }) => {
  const handleOrde = ()=>{
    console.log("cl9cked");
    Axios
          .delete("http://localhost:3030/dish/"+dish._id)
          .then((response) => {
              console.log(response);
          })
          .catch((e) => console.log(e.message));
  }
 
  return (
    <div >
      <table class="table  table-light table-bordered   ">
        <thead>
          <tr>
            <th style={{ width: "25%" }} scope="col">
              Title
            </th>
            <th style={{ width: "25%" }} scope="col">
              Price
            </th>
            <th style={{ width: "25%" }} scope="col">
              Rating
            </th>
            <th style={{ width: "25%" }} scope="col">
              Description
            </th>
            <th style={{ width: "25%" }} scope="col">
              Action
            </th>
          </tr>
        </thead>
      </table>
      <table class="table table-hover   table-striped table-bordered ">
      
            <th style={{ width: "25%" }}>{dish.name}</th>{" "}
            <th className="P" style={{ width: "25%" }}>
            {dish.price}
            </th>{" "}
            <th className="Q" style={{ width: "25%" }}>
            {dish.rating}
            </th>
            <th style={{ width: "25%" }}>{dish.description}</th>
            <th><Button variant="contained" color="secondary" style={{float:"right"}} onClick={handleOrde}>delete</Button></th>
          </table>
      
     
     
    </div> 
  )
};
export default Singleproduct;