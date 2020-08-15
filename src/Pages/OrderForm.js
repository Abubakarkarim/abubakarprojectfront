import React, { useState } from "react";
import { Modal, Button,Form } from "react-bootstrap";
import axios from "axios";
export default function OrderForm({ handleShow, handleClose, show }) {

    const [name, setName] = React.useState("")
    const [price, setPrice] = React.useState(0)
    const [desc, setDesc] = React.useState("")
    const [page, setPage] = React.useState("")

  const handleOrde = ()=>{
    console.log("cl9cked");
    axios
          .post("http://localhost:3030/order",{name,price,desc,page})
          .then((response) => {
              console.log();
           
          })
          .catch((e) => console.log(e.message));
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Enter Your Details</Modal.Body>
        <Form>
  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
   
  </Form.Group>

  <Form.Group controlId="formBasicPhone">
    <Form.Label>PhoneNumber</Form.Label>
    <Form.Control type="Number" placeholder="00000000000" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
  </Form.Group>

  <Form.Group controlId="formBasicAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Enter Address" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
    <Form.Text className="text-muted">
      We'll never share your address with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={page} onChange={(e)=>{setPage(e.target.value)}}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={handleOrde}>
    yahooo!!!
  </Button>
</Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOrde}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
