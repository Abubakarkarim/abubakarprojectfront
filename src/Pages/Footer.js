import React from "react";
import {
  Button,

  NavDropdown,

  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../stylesheet/MainPage.css";

const Footer = () => {
  return (
    <div className=" footer  d=flex">
      
      <footer id="fifth" className="page-footer font-small unique-color-dark">
  <div style={{backgroundColor: 'brown'}}>
    <div className="container">
      {/* Grid row*/}
      <div className="row py-4 d-flex align-items-center">
        {/* Grid column */}
        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
         <div class = "aaa" style={{color:"white"}}>INFORMATION </div>

        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-6 col-lg-7 text-center text-md-right">
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row*/}
    </div>
  </div>
  {/* Footer Links */}
  <div className="container text-center text-md-left mt-5">
    {/* Grid row */}
    <div className="row mt-3">
      {/* Grid column */}
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        {/* Content */}
        <h5 className="text-uppercase font-weight-bold">FAST DESIRE</h5>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
        <p>
        It's the food you love, delivered!
      </p>
      </div>

      {/* Grid column */}
      {/* Grid column */}
      
      {/* Grid column */}
      {/* Grid column */}
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        {/* Links */}
        <h5 className="text-uppercase font-weight-bold">Related links</h5>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
        <p>
        <Link to="/everyday"> Everyday Deals</Link>
        </p>
        <Link to="/NightDeals">Special Deals</Link>
        <p />
      </div>
      {/* Grid column */}
      {/* Grid column */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        {/* Links */}
        <h5 className="text-uppercase font-weight-bold">Contact </h5>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
        <p>
          <i className="fas fa-home mr-3" /> Gujranwala Pakistan</p>
        <p>
          <i className="fas fa-envelope mr-3" /> Fastdesireinfo@gmail.com</p>
        <p>
          <i className="fas fa-phone mr-3" />+ 92 32318762</p>
        <p>
          <i className="fas fa-print mr-3" /> + 01 234 567 89</p>
      </div>
      

  
      
      
      {/* Grid column */}
    </div>
    {/* Grid row */}
  </div>
  {/* Footer Links */}
  {/* Copyright */}
  
  {/* Copyright */}
</footer>
{/* Footer */}

    </div>
  );
};
export default Footer;
