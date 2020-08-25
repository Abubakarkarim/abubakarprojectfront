/** @format */

import React,{useState, useEffect} from "react";
// import { Card, Button, Navbar, Container, NavbarBrand } from "react-bootstrap";
import Car from "./Car";
import N from "./N";
import CardHolder from "./CardHolder";
import Footer from "./Footer";

import { connect } from "react-redux";
import RecipeReviewCard from "../components/Card";
import { Form, FormControl, Button } from "react-bootstrap";
const MainPage = ({dispatch, menue}) => { 

  const src = ["https://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger-scaled.jpg",
  "https://static.toiimg.com/photo/53110049.cms",
  "https://images.eatthismuch.com/site_media/img/1012755_WendyKearns_492e7651-f692-470b-820f-4f94133ea81c.jpg",
  "https://hamariweb.com/recipes/images/recipeimages/10957.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png","https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg",
  "https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/08/aleppo_chicken_wrap850x850-800x850.jpg",
  "https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg",
  "https://media2.s-nbcnews.com/i/newscms/2020_05/1532568/today-food-chloe-cocarelli-today-main-200127-v3_ce4d06e5775cf2d875c690223a2adaf2.jpg",
"https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS.jpg"]
  
//let {name, price, description, rating, _id } = menue;
// const menue = {name:"Abubakar",price:500,description:"Its yummy",rating:"",_id:""};
  //      const menue = {name:"Abubakar1",price:500,description:" Delicious",rating:"",_id:""};
  return (
    <div>


      <Car />
      <div className="d-flex d.column flex-wrap">
      

        {menue.map((single,index) => {
          //return <CardHolder src={src[index]} dispatch={dispatch} menue={single} />;
          return   <RecipeReviewCard  src={src[index]} menue={single} dispatch={dispatch}/>
        })}
      </div>

      <Footer />
    </div>
  );
};
const mapStoreToState = (state) => {
  return {
    menue: state.dish,
  };
};

export default connect(mapStoreToState)(MainPage);