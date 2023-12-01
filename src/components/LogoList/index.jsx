import React from "react";
import Div from "../Div";
import "./logolist.scss";

export default function LogoList() {
  const partnerLogos = [
    {
      src: "/images/new/partner_1 1.svg",
      alt: "Partner"
    },
    {
      src: "/images/new/partner_1 2.svg",
      alt: "Partner"
    },
    {
      src: "/images/new/partner_1 3.svg",
      alt: "Partner"
    },
    {
      src: "/images/new/partner_1 4.svg",
      alt: "Partner"
    },
    {
      src: "/images/new/partner_1 5.svg",
      alt: "Partner"
    }
  ];
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} width={200} />
        </div>
      ))}
    </Div>
  );
}
