import React,{useState, useEffect} from "react";
import CardHolder from "./CardHolder";
import  Footer from "../Pages/Footer";
import { connect } from "react-redux";
const NightDeals = ({menue,dispatch}) =>{
  
  return (
    <div>
             <h1 className="header">Special Deals</h1>
 
     <div className="d-flex d.column flex-wrap">
     {menue.map((single) => {
        return <CardHolder dispatch={dispatch} menue={single}  />;
      })} 
      </div>
      <Footer/>
    </div>
  );
};
const mapStoreToState = (state) => {
  return {
    menue: state.dish,
  };
};

export default connect(mapStoreToState)(NightDeals);