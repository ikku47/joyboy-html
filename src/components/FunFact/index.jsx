import React from "react";
import Div from "../Div";
import "./funfact.scss";
import CountUp from "react-countup";

export default function FunFact({ variant, title, subtitle, data }) {
  return (
    <Div className={variant ? `cs-funfact_wrap ${variant}` : "cs-funfact_wrap"}>
      {/* <Div
        className="cs-funfact_shape"
        style={{ backgroundImage: "url(./images/funfact_shape_bg.svg)" }}
      /> */}
      <div className="cs-funfact_shape">
        <video autoPlay loop muted className="video-container">
          <source src="/bg1.webm" type="video/mp4" />
        </video>
      </div>
      <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Div>
      </Div>
      <Div className="cs-funfact_right">
        <Div className="cs-funfacts">
          {data.map((item, index) => (
            <Div className="cs-funfact cs-style1" key={index}>
              <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                <span />
                <CountUp start={1} end={item.factNumber}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </Div>
              <Div className="cs-funfact_text">
                <span className="cs-accent_color">+</span>
                <p>{item.title}</p>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
