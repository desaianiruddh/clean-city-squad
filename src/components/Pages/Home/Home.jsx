import React from "react";
import "./home.css";

import HomeCarousel from "./HomeCarousel";
const Home = () => {
  return (
    <>
      <HomeCarousel />
      {window.innerWidth < 990 && (
        <div className="container mt-5 text-center ">
          <hr />
          <h2 className=" text-primary">Our Goal</h2>
          <hr />

          <p className="bg-primary text-white p-2 mt-4 text-justify">
            Our main goal as an organization is to reduce and eliminate adverse
            impacts of waste on human health and the envirounment. In addition
            that is also benificial to protect the envirounment as well.
          </p>
          <div className="text-center mt-5">
            "Stop! Don’t waste scrap; recycle it."
          </div>
          <div className=" text-center mt-3">
            "Don’t lose a chance of reuse."
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
