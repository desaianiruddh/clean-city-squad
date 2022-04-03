import Carousel from "react-bootstrap/Carousel";

import Images from "../../../Images/Image";

const HomeCarousel = () => {
  return (
    <>
      <h3 className="text-center text-primary pt-3 mb-4">
        Welcome to a Clean City Squad !
      </h3>
      <Carousel>
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
      <div className="container mt-5 text-center">
        <hr />
        <h2 className=" text-primary">Our Goal</h2>
        <hr />
        <div className="goal-text bg-primary text-white p-sm-5 mt-4 d-flex justify-content-center">
          Our main goal as an organization is to reduce and eliminate <br />
          adverse impacts of waste on human health and the envirounment. <br />
          In addition that is also benificial to protect the envirounment as
          well.
        </div>
        <hr className="mt-4" />
        <div className="text-center mt-4 fs-4">
          "Stop! Don’t waste scrap; recycle it."
        </div>
        <div className="text-center mt-3 fs-4">
          "Don’t lose a chance of reuse."
        </div>
        <hr className="mt-4" />
      </div>
    </>
  );
};
export default HomeCarousel;
