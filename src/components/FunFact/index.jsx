import React from "react";
import Div from "../Div";
import "./funfact.scss";
import CountUp from "react-countup";
import ShinyWrapper from "../ShinyWrapper";
import { isIPad13, isIPhone13, isIPod13 } from "react-device-detect";

export default function FunFact({ variant, title, subtitle, data }) {
  const isIPhone = isIPad13 || isIPhone13 || isIPod13 || true;
  return (
    <Div className={variant ? `cs-funfact_wrap ${variant}` : "cs-funfact_wrap"}>
      {/* <Div
        className="cs-funfact_shape"
        style={{ backgroundImage: "url(./images/funfact_shape_bg.svg)" }}
      /> */}
      <div className="cs-funfact_shape">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="video-container"
        >
          <source src={isIPhone ? "/bg1.mp4" : "/bg1.webm"} type="video/mp4" />
        </video>
      </div>
      <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </Div>
      </Div>
      <Div className="cs-funfact_right">
        <Div className="cs-funfacts">
          {data.map((item, index) => (
            <ShinyWrapper>
              <Div className="cs-funfact cs-style1" key={item.title}>
                <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                  <span />
                  <CountUp start={1} end={item.factNumber} />
                </Div>
                <Div className="cs-funfact_text">
                  <span className="cs-accent_color">+</span>
                  <p>{item.title}</p>
                </Div>
              </Div>
            </ShinyWrapper>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
