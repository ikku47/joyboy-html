import React from "react";
import projects from "../../json/projects.json";
import Portfolio from "../Portfolio";
import Div from "../Div";
import Slider from "react-slick";

export default function PortfolioSlider() {
  /** Slider Settings **/
  const settings = {
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplay: 1200,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          dots: true,
          arrows: false,
          rows: 2
        }
      }
    ]
  };

  return (
    <div>
      <Div>
        {projects.map((item, index) => (
          <Div className="mx-4">
            <Div className="container cs-porfolio-item d-block d-md-flex ">
              <Div className="col-md-9 col-12">
                <h1>{item.title}</h1>
                <Div>{item.description1}</Div>
                <Div className="category mt-2">{item.category}</Div>
              </Div>
              <img
                className="col-md-3 col-12 image mt-4 mt-md-0"
                src={item.src}
                alt=""
              />
            </Div>
          </Div>
        ))}
      </Div>
    </div>
  );
}
