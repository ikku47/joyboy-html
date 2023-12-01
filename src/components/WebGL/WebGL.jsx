import React, { Component } from "react";
import Button from "../Button";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";
import parse from "html-react-parser";

class ScriptTag extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = process.env.PUBLIC_URL + this.props.src;
    document.body.appendChild(script);

    this.cleanup = () => {
      document.body.removeChild(script);
    };
  }

  componentWillUnmount() {
    this.cleanup && this.cleanup();
  }

  render() {
    return null;
  }
}

class WebGLComponent extends Component {
  render() {
    const containerStyle = {
      width: "100%",
      height: "100%",
      overflow: "hidden",
      position: "relative"
    };
    const {
      title,
      subtitle,
      btnText,
      btnLink,
      scrollDownId,
      socialLinksHeading,
      heroSocialLinks,
      bgImageUrl
    } = this.props;
    return (
      <div style={containerStyle}>
        <Div
          className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
          // style={{ backgroundImage: `url(${bgImageUrl})` }}
        >
          <Div className="cs-shape_1" />
          <Div className="cs-shape_1" />
          <Div className="cs-shape_1" />
          <Div className="container">
            <Div className="cs-hero_text">
              <h1 className="cs-hero_title">{parse(title)}</h1>
              <Div className="cs-hero_info">
                <Div>
                  <Button btnLink={btnLink} btnText={btnText} />
                </Div>
                <Div>
                  <Div className="cs-hero_subtitle">{subtitle}</Div>
                </Div>
              </Div>
            </Div>
          </Div>
          <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
          <a href={scrollDownId} className="cs-down_btn">
            .
          </a>
        </Div>
        <ScriptTag src="/dat.gui.min.js" />
        <ScriptTag src="/script.js" />

        <canvas
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0
          }}
        ></canvas>
      </div>
    );
  }
}

export default WebGLComponent;
