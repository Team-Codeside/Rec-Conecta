import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css"

function Carousels() {
  return (
    <div className="carousel-conteiner">
      <Carousel>
        <Carousel.Item interval={4000}>
          <a href="#"><img src="./Recife.jpg" alt="" /></a>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
        <a href="#"><img src="./Recife.jpg" alt="" /></a>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
        <a href="#"><img src="./Recife.jpg" alt="" /></a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;