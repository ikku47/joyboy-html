import React, { useState } from "react";
import projects from "../../json/projects.json";
import ShinyWrapper from "../ShinyWrapper";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

export default function PortfolioSliderNew() {
  const [selectedHeader, setSelectedHeader] = useState(1);

  const filteredProjects = projects.filter(
    (item) => item.type === selectedHeader
  );

  return (
    <div>
      <Div className="cs-portfolio_1_heading col-xl-6 container">
        <SectionHeading title="Clients Stories" subtitle="Latest Projects" />
        <Div className="cs-filter_menu cs-style1">
          <ul className="cs-mp0 cs-center">
            <li className={selectedHeader === 1 ? "active" : ""}>
              <span onClick={() => setSelectedHeader(1)}>Web Development</span>
            </li>
            <li className={selectedHeader === 2 ? "active" : ""}>
              <span onClick={() => setSelectedHeader(2)}>App Development</span>
            </li>
            {/* {categoryMenu.map((item, index) => (
              <li
                className={active === item.category ? "active" : ""}
                key={index}
              >
                <span onClick={() => setActive(item.category)}>
                  {item.title}
                </span>
              </li>
            ))} */}
          </ul>
        </Div>
      </Div>

      <Spacing lg="85" md="45" />
      {/* <Div className="portfolio-header">
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
      </Div> */}
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
