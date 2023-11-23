import React, { Component } from "react";

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
      overflow: "hidden"
    };

    return (
      <div style={containerStyle}>
        <ScriptTag src="/dat.gui.min.js" />
        <ScriptTag src="/script.js" />

        <canvas style={{ width: "100%", height: "100%" }}></canvas>
      </div>
    );
  }
}

export default WebGLComponent;
