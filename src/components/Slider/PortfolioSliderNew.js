import React, { useState } from "react";
import projects from "../../json/projects.json";
import ShinyWrapper from "../ShinyWrapper";
import Div from "../Div";

export default function PortfolioSliderNew() {
  const [selectedHeader, setSelectedHeader] = useState(1);

  const filteredProjects = projects.filter(
    (item) => item.type === selectedHeader
  );

  return (
    <div>
      <Div className="portfolio-header">
        <h5
          className={selectedHeader === 1 ? "selected" : ""}
          onClick={() => setSelectedHeader(1)}
        >
          Web Development
        </h5>
        <h5
          className={selectedHeader === 2 ? "selected" : ""}
          onClick={() => setSelectedHeader(2)}
        >
          App Development
        </h5>
        <h5
          className={selectedHeader === 3 ? "selected" : ""}
          onClick={() => setSelectedHeader(3)}
        >
          UI/UX Design
        </h5>
        <h5
          className={selectedHeader === 4 ? "selected" : ""}
          onClick={() => setSelectedHeader(4)}
        >
          3D Design
        </h5>
      </Div>
      <Div className="new-portfolio">
        {filteredProjects.map((item, index) => (
          <Div className="col-12">
            <ShinyWrapper className="container cs-porfolio-item d-block  ">
              <img
                className={
                  item.type === 1
                    ? "col-12 image mt-md-0"
                    : "col-12 imageNormal mt-md-0"
                }
                src={item.src}
                alt=""
              />
              <img
                className={
                  item.type === 2 ? "col-3 port-app-logo mt-4" : "col-3 mt-4"
                }
                src={item.logo}
                alt=""
              />
              <Div className="col-12 mt-0 mt-md-3">
                <h1>{item.title}</h1>
                <p>{item.description1}</p>
                {item.type === 2 ? (
                  <Div className="mb-2 d-block">
                    <Div>
                      <a href={item.ios}>AppStore (iOS)</a>
                    </Div>
                    <Div>
                      <a href={item.android}>PlayStore (Android)</a>
                    </Div>
                  </Div>
                ) : (
                  <Div className="mb-2">
                    <a href={item.link}>View Website</a>
                  </Div>
                )}
                {/* <Div className="category">{item.category}</Div> */}
              </Div>
            </ShinyWrapper>
          </Div>
        ))}
      </Div>
    </div>
  );
}
