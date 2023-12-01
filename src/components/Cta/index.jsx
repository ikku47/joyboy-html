import React from "react";
import parse from "html-react-parser";
import "./cta.scss";
import Button from "../Button";
import Div from "../Div";
import Spacing from "../Spacing";
import Lottie from "lottie-react";
import boxAnim from "./boxAnim.json";

export default function Cta({ title, btnText, btnLink, bgSrc, variant }) {
  return (
    <Div
      className={`cs-cta cs-style1 cs-bg text-center cs-shape_wrap_1 cs-position_1 ${
        variant ? variant : ""
      }`}
      style={{ backgroundColor: "black" }}
    >
      <div
        style={{
          position: "absolute",
          width: "20%",
          left: "40%",
          right: "auto"
        }}
      >
        {/* <Lottie animationData={boxAnim} loop={true} /> */}
      </div>
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-cta_in">
        <h2 className="cs-cta_title cs-semi_bold cs-m0">{parse(title)}</h2>
        {btnText && (
          <>
            <Spacing lg="70" md="30" />
            <Button btnLink="https://calendly.com/joyboyae" btnText={btnText} />
          </>
        )}
      </Div>
    </Div>
  );
}
