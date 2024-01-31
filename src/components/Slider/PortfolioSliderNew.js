import React from "react";
import projects from "../../json/projects.json";
import ShinyWrapper from "../ShinyWrapper";
import Div from "../Div";

export default function PortfolioSliderNew() {
  return (
    <div>
      <Div className="portfolio-header">
        <h5>Web Development</h5>
        <h5>App Development</h5>
        <h5>UI/UX</h5>
        <h5>3D Design</h5>
      </Div>
      <Div className="new-portfolio">
        {projects.map((item, index) => (
          <Div className="col-12">
            <ShinyWrapper className="container cs-porfolio-item d-block  ">
              <img className="col-12 image mt-md-0" src={item.src} alt="" />
              <img className="col-3 mt-4" src={item.logo} alt="" />
              <Div className="col-12 mt-0 mt-md-3">
                <h1>{item.title}</h1>
                <p>{item.description1}</p>
                <Div className="mb-2">
                  <a href={item.link}>View Website</a>
                </Div>
                <Div className="category">{item.category}</Div>
              </Div>
            </ShinyWrapper>
          </Div>
        ))}
      </Div>
    </div>
  );
}
