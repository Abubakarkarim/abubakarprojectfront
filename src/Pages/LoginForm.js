/** @format */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";


export default function LoginForm({ handleShow, handleClose, show }) {
  const [phoNo, setPhno] = useState("");
  
  const [password, setPassword] = useState("");
  let history=useHistory();
  function handleLogin(){
    axios({
      method: 'post', //you can set what request you want to be
      url: 'http://localhost:3030/admin-login',
      data: {phoNo,password},
    }).then((res)=>{
      handleClose();
      history.push("/admincrud")
      localStorage.setItem("foodie_token",res.data.token)
    }).catch((e)=>{
      alert("INCORRECT! USER OR PASSWORD!")
    })
  }

  const LoginForm = ({dispatch}) => {
  const src= ["https://profilelogin.admissione.online/images/admin_login.gif"]
  }

  return (
    <>

   
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADMIN</Modal.Title>

        </Modal.Header>
        <i style={{textAlign:"center"}}>
        <img src="https://img.icons8.com/bubbles/2x/admin-settings-male.png" width="200px"></img>
        </i>
        <Modal.Body>ADMIN CAN SIGN IN HERE</Modal.Body>
  
        <Form>
          <Form.Group controlId="formBasicAdmin">
            <Form.Label>Phone Number/ Email</Form.Label>

            <Form.Control
              type="text"
              value={phoNo}
              onChange={(e) => {
                
                setPhno(e.target.value)
              }}
              placeholder="Enter Number"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"   value={password}
              onChange={(e) => {
                
               
                setPassword(e.target.value)
              }} placeholder="xxxxxxx" />
          </Form.Group>
          
          <Button variant="secondary" style={{float: "right"}} onClick={handleLogin}>
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
}