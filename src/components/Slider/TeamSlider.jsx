import { Icon } from "@iconify/react";
import React from "react";
import Slider from "react-slick";
import Div from "../Div";
import Team from "../Team";

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: "/images/team/iqqu.png",
      memberName: "Melon Bulgery",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/ameer.png",
      memberName: "Melon Bulgery",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/faris.png",
      memberName: "Melon Bulgery",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/naveen.png",
      memberName: "Melon Bulgery",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/faiz.png",
      memberName: "Melon Bulgery",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/uvais.png",
      memberName: "Melon Bulgery",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    autoplay: true,
    autoplaySpeed: 1200,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    rows: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false,
          rows: 2,
        }
      }
    ]
  };

  return (
    <Div><Slider {...settings} className="cs-gap-24 cs-arrow_style2">
    {teamData.map((item, index) => (
      <Div key={index}>
        <Team
          memberImage={item.memberImage}
          memberName={item.memberName}
          memberDesignation={item.memberDesignation}
          memberSocial={item.memberSocial}
        />
      </Div>
    ))}
  </Slider>
  {/* <div className="grid">
      {teamData.map((item, index) => (
         <Team
         memberImage={item.memberImage}
         memberName={item.memberName}
         memberDesignation={item.memberDesignation}
         memberSocial={item.memberSocial}
       />
      ))}
    </div> */}
  
  </Div>
  );
}
