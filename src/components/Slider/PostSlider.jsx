import React from "react";
import Slider from "react-slick";
import Div from "../Div";
import Post from "../Post";

export default function PostSlider() {
  const postData = [
    {
      url: "/blog/why-flutter",
      src: "/images/post_1.jpeg",
      alt: "Post",
      date: "01 Dec 2023",
      title:
        "Elevating Mobile App Magic: Why Flutter Reigns Supreme in Dubai's Thriving Tech Market"
    },
    {
      url: "/blog/blog-details",
      src: "/images/post_2.jpeg",
      alt: "Post",
      date: "01 Dec 2023",
      title: "Evolution of UI Trends: A Journey Through Time"
    },
    {
      url: "/blog/why-flutter",
      src: "/images/post_1.jpeg",
      alt: "Post",
      date: "01 Dec 2023",
      title:
        "Elevating Mobile App Magic: Why Flutter Reigns Supreme in Dubai's Thriving Tech Market"
    },
    {
      url: "/blog/blog-details",
      src: "/images/post_2.jpeg",
      alt: "Post",
      date: "01 Dec 2023",
      title: "Evolution of UI Trends: A Journey Through Time"
    },
    {
      url: "/blog/why-flutter",
      src: "/images/post_1.jpeg",
      alt: "Post",
      date: "01 Dec 2023",
      title:
        "Elevating Mobile App Magic: Why Flutter Reigns Supreme in Dubai's Thriving Tech Market"
    },
    {
      url: "/blog/blog-details",
      src: "/images/post_2.jpeg",
      alt: "Post",
      date: "01 Dec 2023",
      title: "Evolution of UI Trends: A Journey Through Time"
    }
  ];

  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className="cs-gap-24">
      {postData.map((item, index) => (
        <Div key={index}>
          <Post
            url={item.url}
            src={item.src}
            alt={item.alt}
            date={item.date}
            title={item.title}
          />
        </Div>
      ))}
    </Slider>
  );
}
