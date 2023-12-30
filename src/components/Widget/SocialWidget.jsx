import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Div from "../Div";

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <a
        href="https://www.linkedin.com/company/joyboy-ae"
        className="cs-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="fa6-brands:linkedin-in" />
      </a>
      <a
        href="https://www.twitter.com/joyboy_ae"
        className="cs-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="fa6-brands:twitter" />
      </a>
      <a
        href="https://www.instagram.com/joyboy_ae_"
        className="cs-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="fa6-brands:instagram" />
      </a>
    </Div>
  );
}
