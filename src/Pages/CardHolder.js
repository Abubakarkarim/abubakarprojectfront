/** @format */

import React from "react";
import { Card, Button } from "react-bootstrap";
import Bucket from "./Bucket";

import {addToBucket} from '../actions/bucketActions'
import { propTypes } from "react-bootstrap/esm/Image";
import RecipeReviewCard from "../components/Card";
export default ({ menue,dispatch, src }) => {
 

  let {name, price, description, rating, _id } = menue;
  //const src = ["https://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger-scaled.jpg","https://static.toiimg.com/photo/53110049.cms","https://images.eatthismuch.com/site_media/img/1012755_WendyKearns_492e7651-f692-470b-820f-4f94133ea81c.jpg","https://hamariweb.com/recipes/images/recipeimages/10957.jpg"]
  
  return (
    <div className="m-4">
      {/* <Card bg="Secondary" border="dark" style={{ width: "18rem" }}>
       
        <Card.Body>
          <Card.Title className="text-center"><h3>{name}</h3></Card.Title>
          <Card.Text>
            <h6>Description:</h6>{description}
            <h6>Rating:</h6>  {rating}
            <h4>Price:{price}</h4>
          
          </Card.Text>

          <img src={src} width="250px"></img>

          <Button
            variant="outline-dark" size="lg" block
            onClick={() => {
              
           dispatch(addToBucket(menue));
          
            }}
          >
            Add to Bucket
          </Button>
          

        </Card.Body>
      </Card> */}
      <RecipeReviewCard  src={src}  menue={menue} dispatch={dispatch}/>
    </div>
  );
};
