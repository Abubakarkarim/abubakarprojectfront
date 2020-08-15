import React from "react";
const Singleproduct = ({ dish }) => {
 
  return (
    <div >
      <table class="table  table-dark table-bordered   ">
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
          </table>
      
     
     
    </div> 
  )
};
export default Singleproduct;