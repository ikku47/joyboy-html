import React from "react";
import projects from "../../json/projects.json";
import Portfolio from "../Portfolio";
import Div from "../Div";
import Slider from "react-slick";

export default function PortfolioSlider() {
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplay: 1200,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
      {projects.map((item, index) => (
        <Div key={index}>
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  );
}
