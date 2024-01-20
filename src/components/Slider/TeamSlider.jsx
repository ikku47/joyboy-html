import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Div from "../Div";
import Team from "../Team";

export default function TeamSlider() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const updateWindowDimensions = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const teamData = [
    {
      memberImage: "/images/team/salman.png",
      memberName: "Salman.",
      memberDesignation: "Chief Strategic Advisor | Lead Counsel",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/k-s-khan-3797531b/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/iqqu.png",
      memberName: "Iqbal.",
      memberDesignation: "Co-Founder | Team Lead",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/ikku47",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/ameer.png",
      memberName: "Ameer.",
      memberDesignation: "Co-Founder | Dev/Design Lead",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/ameer-rizvi-10/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/faris.png",
      memberName: "Faris.",
      memberDesignation: "Flutter Lead",
      memberSocial: {
        linkedin:
          "https://www.linkedin.com/in/mohammed-faris-k-1a5b11148/?originalSubdomain=ae",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/naveen.png",
      memberName: "Naveen.",
      memberDesignation: "Senior Flutter Developer",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/naveen-jose-377229145/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/faiz.png",
      memberName: "Faiz.",
      memberDesignation: "Full Stack MERN Developer ",
      memberSocial: {
        linkedin:
          "https://www.linkedin.com/in/muhammadfayis/?originalSubdomain=in",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/rayaan.png",
      memberName: "Rayaan.",
      memberDesignation: "Business Development Officer",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/rayaan-khan-181865204",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/afsala.png",
      memberName: "Afsala.",
      memberDesignation: "QA Lead",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/afsalashirien/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/uvais.png",
      memberName: "Uvais.",
      memberDesignation: "Senior Flutter Developer",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/uvais-mohammad-024440164/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    }
  ];

  const teamDataMob = [
    {
      memberImage: "/images/team/salman.png",
      memberName: "Salman.",
      memberDesignation: "Chief Strategic Advisor | Lead Counsel",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/k-s-khan-3797531b/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/faris.png",
      memberName: "Faris.",
      memberDesignation: "Flutter Lead",
      memberSocial: {
        linkedin:
          "https://www.linkedin.com/in/mohammed-faris-k-1a5b11148/?originalSubdomain=ae",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/rayaan.png",
      memberName: "Rayaan.",
      memberDesignation: "Business Development Officer",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/rayaan-khan-181865204",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/iqqu.png",
      memberName: "Iqbal.",
      memberDesignation: "Co-Founder | Team Lead",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/ikku47",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/naveen.png",
      memberName: "Naveen.",
      memberDesignation: "Senior Flutter Developer",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/naveen-jose-377229145/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/afsala.png",
      memberName: "Afsala.",
      memberDesignation: "QA Lead",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/afsalashirien/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/ameer.png",
      memberName: "Ameer.",
      memberDesignation: "Co-Founder | Dev/Design Lead",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/ameer-rizvi-10/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/faiz.png",
      memberName: "Faiz.",
      memberDesignation: "Full Stack MERN Developer ",
      memberSocial: {
        linkedin:
          "https://www.linkedin.com/in/muhammadfayis/?originalSubdomain=in",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    },
    {
      memberImage: "/images/team/uvais.png",
      memberName: "Uvais.",
      memberDesignation: "Senior Flutter Developer",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/uvais-mohammad-024440164/",
        twitter: "/",
        youtube: "/",
        facebook: "/"
      }
    }
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
    dots: false,
    infinite: false,
    slidesToShow: 6,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false,
          rows: 3
        }
      }
    ]
  };

  return (
    <Div>
      <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
        {(isMobile ? teamDataMob : teamData).map((item, index) => (
          <Div key={index}>
            <Team
              memberImage={item.memberImage}
              memberName={item.memberName}
              memberDesignation={
                <div
                  dangerouslySetInnerHTML={{ __html: item.memberDesignation }}
                />
              }
              memberSocial={item.memberSocial}
            />
          </Div>
        ))}
      </Slider>
    </Div>
  );
}
