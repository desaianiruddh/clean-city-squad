import React from "react";

import "./about.css";

const AboutUs = () => {
  return (
    <>
      <div className="mt-5 d-flex justify-content-evenly flex-wrap">
        <div className="d-flex flex-column">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/keep-our-city-clean-sign-board-template-design-585f0c6a2efa8121332943f700f5e63d_screen.jpg?ts=1595071614"
            alt="logo"
            width="300"
            className=" rounded-circle mt-sm-5"
          />
          <div className="title-text text-primary mt-2 fs-1">
            Clean City Squad
          </div>
        </div>
        <div>
          <div className="text-center m-5 fs-5 paragraph-text">
            we're building web app which helps people to stay healthy and clean
            their city or near by roads by sending the click of garbage they
            found near by and send the more than 2 photos to the corporation and
            that will send the request to the corporation and they will take the
            garbage from located areas and this way our application will help
            people
          </div>
          <div className="d-flex flex-row flex-wrap justify-content-center">
            <img
              src="https://static.toiimg.com/thumb/msid-81523184,imgsize-873048,width-400,resizemode-4/81523184.jpg"
              className="images"
              alt="img"
            />
            <img
              src="https://assets.telegraphindia.com/telegraph/e5f60f74-3b64-4f97-be78-cf1cfe5db529.jpg"
              className="images"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="footer bg-primary w-100 text-white mt-3">
        <div className="text-center fs-3 pt-2 text-decoration-underline">
          Contact Us
        </div>
        <div className="d-flex justify-content-between px-5 pb-3 fs-5">
          <div>
            <div>Mobile :- xxxxxxxxxxxx</div>
            <div>Email :- xxxxxxxx@xx.xxx</div>
          </div>
          <div>
            <div>Address :-</div>
            <div>xxxxxxxxxxxxxxxxx</div>
            <div>xxxxxxxxxxxxxxxxxxxx</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
