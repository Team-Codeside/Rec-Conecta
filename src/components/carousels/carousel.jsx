import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css"

function Carousels() {
  return (
    <div className="carousel-conteiner">
      <Carousel>
        <Carousel.Item interval={3000}>
          <a href="#"><img src="/evento-4.jpeg" alt="" /></a>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
        <a href="#"><img src="/evento-5.jpeg" alt="" /></a>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
        <a href="#"><img src="/evento-6.jpeg" alt="" /></a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;