import Carousel from "react-bootstrap/Carousel";

import Images from "../../../Images/Image";

const HomeCarousel = () => {
  return (
    <div className=" container mt-md-2">
      <h2 className="text-center text-primary pt-3">
        Welcome to a Cleaner World !
      </h2>
      <Carousel className="pt-4">
        <Carousel.Item interval={1000} className="text-dark">
          <img
            className="d-block w-100  slides"
            src={Images[0]}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000} className="text-dark">
          <img
            className="d-block w-100 slides"
            src={Images[1]}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000} className="text-dark">
          <img
            className="d-block w-100 slides"
            src={Images[2]}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 slides"
            src={Images[3]}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 slides"
            src={Images[4]}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default HomeCarousel;
