import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Button from "../Button";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import projects from "../../json/projects.json";

export default function PortfolioDetailsPage() {
  const params = useParams();
  const currentItem = projects.find(
    (item) => item.slug === params.portfolioDetailsId
  );
  const currentIndex = projects.findIndex(
    (item) => item.slug === params.portfolioDetailsId
  );
  pageTitle(`Portfolio Details - ${currentItem.title}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);
  return (
    <>
      <PageHeading
        title={currentItem.title}
        bgSrc={currentItem.src}
        pageLinkText={params.portfolioDetailsId}
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        {/* <img
          src={currentItem.src}
          alt="Details"
          className="cs-radius_15 w-100"
        /> */}
        <Spacing lg="90" md="40" />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title={currentItem.title}
              subtitle={currentItem.subtitle}
            >
              <Spacing lg="40" md="20" />
              <p>{currentItem.description1}</p>
              <Spacing lg="10" md="10" />
              <p>{currentItem.description2}</p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg="60" md="40" />
            <h2 className="cs-font_30 cs-font_26_sm cs-m0">Project Info -</h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Category:
                </h3>
                <p className="cs-m0">{currentItem.category}</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Location:
                </h3>
                <p className="cs-m0">{currentItem.location}</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Software:
                </h3>
                <p className="cs-m0">{currentItem.software}</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Dated:
                </h3>
                <p className="cs-m0">{currentItem.dated}</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Client:
                </h3>
                <p className="cs-m0">{currentItem.client}</p>
                <Spacing lg="30" md="30" />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="65" md="10" />
        <Div className="cs-page_navigation cs-center">
          {projects[currentIndex - 1] && (
            <Div>
              <Button
                btnLink={projects[currentIndex - 1].href}
                btnText="Prev Project"
                variant="cs-type1"
              />
            </Div>
          )}
          {projects[currentIndex + 1] && (
            <Div>
              <Button
                btnLink={projects[currentIndex + 1].href}
                btnText="Next Project"
              />
            </Div>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
