import React from 'react';
import { Carousel } from 'react-bootstrap';
import blog1 from './blog1.jpg'
import blog2 from './blog2.jpg'
import blog3 from './blog3.png'





const Blog = () => {
    return (
        <div className="container">
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={blog1}
      alt="First slide"
      height="500px"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={blog2}
      alt="Second slide"
      height="500px"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={blog3}
      alt="Third slide"
      height="500px"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Blog;