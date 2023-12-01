import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Pagination from "../Pagination";
import PostStyle2 from "../Post/PostStyle2";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";

export default function BlogPage() {
  pageTitle("Blog");
  const postData = [
    {
      thumb: "/images/new/bFlutter.jpg",
      title:
        "Elevating Mobile App Magic: Why Flutter Reigns Supreme in Dubai's Thriving Tech Market",
      subtitle:
        "In the bustling tech landscape of Dubai, where innovation meets opulence, Flutter emerges as the go-to enchantment for mobile app development. Google's Flutter has become the beacon guiding developers to craft spellbinding applications tailored for Dubai's diverse market. In this article, we unveil the secrets behind Flutter's dominance, exploring its prowess in the Dubai market and delving into industries where the magic of Flutter truly shines.        ",
      date: "01 Dec 2023",
      category: "Mobile App Development",
      categoryHref: "/blog",
      href: "/blog/why-flutter"
    },
    {
      thumb: "/images/new/bUi.png",
      title: "Evolution of UI Trends: A Journey Through Time",
      subtitle:
        "The world of User Interface (UI) design is in a constant state of flux, evolving and adapting to the ever-changing landscape of technology and user expectations. Over the years, we have witnessed a remarkable transformation in UI trends, from the early days of skeuomorphic design to the sleek and minimalist interfaces of today. In this blog post, we take a journey through time to explore how UI trends have changed and what influences have shaped the way we interact with digital experiences.",
      date: "01 Dec 2023",
      category: "UI/UX",
      categoryHref: "/blog",
      href: "/blog/ui-trends"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Our Blog"
        bgSrc="/images/blog_hero_bg.jpeg"
        pageLinkText="Blog"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index) => (
              <Div key={index}>
                <PostStyle2
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {postData.length > index + 1 && <Spacing lg="95" md="60" />}
              </Div>
            ))}
            <Spacing lg="60" md="40" />
            <Pagination />
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg="0" md="80" />
            <Sidebar />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s discuss & make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
