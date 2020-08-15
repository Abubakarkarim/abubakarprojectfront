import React from "react";
import { Carousel } from "react-bootstrap";
function Car() {
  return (
    <div>

      
      <Carousel className="car">
        <Carousel.Item>
          <img className="d-block w-100" width="800px" src="https://tobuz-dev-bkt.s3.amazonaws.com/15876112860990_89399200_1551782137_fast1_jpg" alt="Deal 1" />
          <Carousel.Caption>

            
            <h3>Buy 1 Get 1 Free Deal</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://i2.wp.com/dinepartner.com/blog/wp-content/uploads/2019/12/fastfood.jpg?fit=750%2C342&ssl=1" alt="Deal 2" />
          <Carousel.Caption>
            <h3>Loot Deal</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://citybook.pk/wp-content/uploads/2018/02/WEBSITE_CATERING_768x432px_V2.jpg" alt="Deal 3" />

          <Carousel.Caption>
            <h3>Happy Meal</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Car;
