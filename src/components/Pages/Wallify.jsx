import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import PageHeading from "../PageHeading";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";

export default function WallifyPage() {
  pageTitle("Wallify");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading title="Wallify" />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <body>
            <h1>Privacy Policy for Wallify</h1>

            <p>
              This Privacy Policy ("Policy") describes how Wallify ("we," "us,"
              or "our") collects, uses, shares, and protects your personal
              information in connection with our mobile application "Wallify"
              (the "App") for iPhone and Android. By using the App, you consent
              to the practices outlined in this Policy.
            </p>

            <h2>1. Information We Collect</h2>

            <h3>1.1 Personal Information</h3>
            <p>
              We do not collect any personally identifiable information (PII)
              from users.
            </p>

            <h3>1.2 Non-Personal Information</h3>
            <p>
              We may collect non-personal information such as device information
              (including device type, operating system version, and unique
              device identifiers), app usage data, and other technical
              information to improve the performance and features of the App.
            </p>

            <h2>2. Use of Information</h2>

            <p>We use the collected information for the following purposes:</p>

            <ul>
              <li>
                To provide, maintain, and improve the App's functionality and
                features.
              </li>
              <li>
                To personalize your experience and provide you with relevant
                content.
              </li>
              <li>
                To analyze trends, track user engagement, and monitor the
                effectiveness of the App.
              </li>
              <li>
                To comply with legal obligations and enforce our policies.
              </li>
            </ul>

            <h2>3. Sharing of Information</h2>

            <p>
              We do not sell, trade, or rent your information to third parties.
              However, we may share non-personal information with service
              providers, partners, or for legal compliance.
            </p>

            <h2>4. Use of Images from Unsplash.com</h2>

            <p>
              Wallify utilizes images sourced from Unsplash.com, in accordance
              with Unsplash's terms and conditions. By using the App, you agree
              to abide by Unsplash's rules and guidelines regarding the use of
              their images.
            </p>

            <h2>5. Security</h2>

            <p>
              We take reasonable measures to protect the information collected
              against unauthorized access, alteration, disclosure, or
              destruction.
            </p>

            <h2>6. Children's Privacy</h2>

            <p>
              The App is not intended for children under the age of 13. We do
              not knowingly collect or solicit personal information from
              children.
            </p>

            <h2>7. Changes to this Policy</h2>

            <p>
              We may update this Policy from time to time, and any changes will
              be reflected in the updated version of the App. Your continued use
              of the App after any changes signifies your acceptance of the
              revised Policy.
            </p>

            <h2>8. Contact Us</h2>

            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at{" "}
              <a href="mailto:info@joyboy.ae">info@joyboy.ae</a>
            </p>
          </body>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Spacing lg="50" md="40" />
    </>
  );
}
