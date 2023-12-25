import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";
import "./footer.scss";

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  const copyrightLinks = [
    {
      title: "Terms of Use",
      href: "/"
    },
    {
      title: "Privacy Policy",
      href: "/"
    }
  ];

  const serviceMenu = [
    {
      title: "UI/UX design",
      href: "/service/service-details"
    },
    {
      title: "WP development",
      href: "/service/service-details"
    },
    {
      title: "Digital marketing",
      href: "/service/service-details"
    },
    {
      title: "React development",
      href: "/service/service-details"
    }
  ];

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/joyboyl1.svg"
                  logoAlt="Logo"
                  text="Discover the Future with Joyboy: Connect Here"
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              {/* <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div> */}
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Connect"
                  subtitle="We're here to connect and assist you"
                  placeholder="info@joyboy.ae"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2023</Div>
          </Div>
        </Div>
      </Div> */}
    </footer>
  );
}
