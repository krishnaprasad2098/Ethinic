import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import slide1 from "./assets/bannerimages/Banner1.jpg";
import slide2 from "./assets/bannerimages/Banner2.jpg";
import slide3 from "./assets/bannerimages/Banner3.jpg";
import slide4 from "./assets/bannerimages/4.png";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>Buy the Art's</h3>
          <p>Upto off on All Art's</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Handmade Art</h3>
          <p>The Biggest Sale</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Made with Love</h3>
          <p>Buy 1 feed more</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={slide4} alt="Fourth slide" />

        <Carousel.Caption>
          <h3>Friday Sale</h3>
          <p>All Crafted available</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
