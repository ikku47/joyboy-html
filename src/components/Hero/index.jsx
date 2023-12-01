import React from "react";
import parse from "html-react-parser";
import "./hero.scss";
import Button from "../Button";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";
import WebGLComponent from "../WebGL/WebGL";

export default function Hero(props) {
  return (
    <div>
      <WebGLComponent {...props} />
    </div>
  );
}
