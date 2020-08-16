/** @format */

import React, { useState } from "react";
import Footer from "./Footer";
import CardHolder from "./CardHolder";
import { Button } from "react-bootstrap";
import OrderForm from "./OrderForm";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearBucket } from "../actions/bucketActions";
const BucketPage = ({ bucket, dispatch }) => {
  console.log("THE PROPS ARE", bucket);

  const [show, setShow] = useState(false);
  let total = 0;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <OrderForm
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <Button
        variant="outline-dark" size="lg"
        className="m-1"
        onClick={() => {
          dispatch(clearBucket());
        }}
      >
        {" "}
        Empty
      </Button>
      <Button variant="outline-dark" size="lg" className="m-1" onClick={handleShow}>
        Order
      </Button>

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
              Quantity
            </th>
            <th style={{ width: "25%" }} scope="col">
              Total Bill
            </th>
          </tr>
        </thead>
      </table>

      {bucket.map((single) => {
        total = total + single.price * single.qty;
        return (
          <table class="table table-hover   table-striped table-bordered ">
            <th style={{ width: "25%" }}>{single.name}</th>{" "}
            <th className="P" style={{ width: "25%" }}>
              {single.price}
            </th>{" "}
            <th className="Q" style={{ width: "25%" }}>
              {single.qty}
            </th>
            <th style={{ width: "25%" }}>{single.price * single.qty} </th>
          </table>
        );
      })}
      <h3 className="alert alert-danger">Bill = {total}/- </h3>
      <Footer />
    </div>
  );
};

const mapStoreToState = (state) => {
  return { bucket: state.bucket };
};

export default connect(mapStoreToState)(BucketPage);
