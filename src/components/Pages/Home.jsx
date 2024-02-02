import React, { useEffect } from "react";
import Card from "../Card";
import FunFact from "../FunFact";
import Hero from "../Hero";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Cta from "../Cta";
import LogoList from "../LogoList";
import MovingText from "../MovingText";
import PortfolioSlider from "../Slider/PortfolioSlider";
import PostSlider from "../Slider/PostSlider";
import TestimonialSlider from "../Slider/TestimonialSlider";
import TeamSlider from "../Slider/TeamSlider";
import VideoModal from "../VideoModal";
import TimelineSlider from "../Slider/TimelineSlider";
import { pageTitle } from "../../helper";
import ShinyWrapper from "../ShinyWrapper";
import PortfolioSliderNew from "../Slider/PortfolioSliderNew";

export default function Home() {
  pageTitle("Home1");

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: "Behance",
      links: "/"
    },
    {
      name: "Twitter",
      links: "/"
    }
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: "Joyful Clients",
      factNumber: "52"
    },
    {
      title: "Jobs Completed",
      factNumber: "118"
    },
    {
      title: "Team Members",
      factNumber: "22"
    },
    {
      title: "Digital products",
      factNumber: "16"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Reimagine your digital possibilities"
        subtitle="Web2 to Web3, App Development, UI/UX Design, and AI: We've Got It All, Infused with Joy!"
        btnText="Talk to us"
        btnLink="/contact"
        scrollDownId="#client"
      >
        {/* Include the WebGLComponent here as the background */}
      </Hero>
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Hire a full-fledged software development team"
          subtitle="Decide between specialized technical experts or self-directed cross-functional teams. We possess the capability to manage intricate mobile and web software projects throughout the entire process, from initial exploration to final delivery."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>

                <Div className="col-lg-3 col-6">
                  <ShinyWrapper>
                    <Card
                      title="Mobile App Development"
                      link="/service/service-details"
                      src="/images/mobile.png"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </ShinyWrapper>
                </Div>

                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>

                <Div className="col-lg-3 col-6">
                  <ShinyWrapper>
                    <Card
                      title="UI/UX Design"
                      link="/service/service-details"
                      src="/images/ui.png"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </ShinyWrapper>
                </Div>

                <Div className="col-lg-3 col-6">
                  <ShinyWrapper>
                    <Card
                      title="Web Development"
                      link="/service/service-details"
                      src="/images/web.png"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </ShinyWrapper>
                </Div>

                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>

                <Div className="col-lg-3 col-6">
                  <ShinyWrapper>
                    <Card
                      title="Web3"
                      link="/service/service-details"
                      src="/images/web3.png"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </ShinyWrapper>
                </Div>

                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="100" />
      <Div id="client">
        <Div className="container">
          <SectionHeading
            title="Client Stories"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSliderNew />
        {/* <PortfolioSlider /> */}
      </Div>
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      {/* <Spacing lg="150" md="80" /> */}
      {/* <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="We get multiple awards"
                subtitle="Our Awards"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      {/* <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div> */}
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Crew Members"
          subtitle="Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* <Spacing lg="150" md="80" /> */}
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      {/* <TestimonialSlider /> */}
      {/* End Testiw
      
      monial Section */}

      {/* Start Blog Section */}
      {/* <Spacing lg="50" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publications"
                subtitle="Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <SectionHeading
          title="Trusted by great companies"
          subtitle="Clients"
          btnText="See All Services"
          btnLink="/service"
        />
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s discuss & make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
