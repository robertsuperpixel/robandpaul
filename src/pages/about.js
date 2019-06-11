import React from "react"
import Layout from "../components/layout"
import HeroPages from "../components/hero-pages"
import CallToAction from "../components/call-to-action"
import Teammember from "../components/team-member"

const AboutPage = () => (
  <Layout lightMenu={false}>
    {/* HERO COMPONENT */}
    <HeroPages
      headerTitle="About"
      headerDesc="Everything you need to know about our Rob&amp;Paul."
    />

    {/* PAGE CONTENT */}
    <div id="page-content" className="ed-page-content">
      {/* OUR MISSION / WHAT WE DO */}
      <section className="pt-md-9 pb-md-9">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <h3
                className="translate-text translate-up"
                data-translate-delay="150"
              >
                <span>Our Mission</span>
              </h3>
              <p
                className="animated"
                data-animation="fadeInUp"
                data-animation-delay="150"
              >
                <span>
                  Mauris ut sem elementum, tristique velit sed, volutpat mauris.
                  Ut interdum nibh sit amet imperdiet condimentum. Nulla sed
                  tellus placerat, vehicula risus ac, sollicitudin quam. Quisque
                  pharetra porta libero, a sagittis nisl tristique non. Etiam
                  sapien purus, cursus eu pulvinar et, tempor sit amet ipsum.
                  Sed a nisl sit amet lorem dictum hendrerit.
                </span>
              </p>
            </div>
            <div className="col-md-6">
              <h3
                className="translate-text translate-up"
                data-translate-delay="250"
              >
                <span>What we Do</span>
              </h3>
              <p
                className="animated"
                data-animation="fadeInUp"
                data-animation-delay="250"
              >
                <span>
                  Fusce massa dolor, mattis sed ultrices ut, placerat ut leo.
                  Donec sed fringilla lectus, non vulputate orci. Integer id
                  libero euismod, interdum ligula vel, porttitor magna. Sed
                  euismod maximus finibus. Pellentesque tempus ultricies nisi at
                  cursus. Nulla at nisi tellus. Suspendisse potenti.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <CallToAction
        ctaImage="/images/hero-001.jpg"
        ctaAlt="BackgroundImage"
        ctaTitle="We make brands, websites and friends."
        ctaDescription="Vestibulum fringilla dolor est, vitae rhoncus nisl condimentum eget. Nunc interdum facilisis velit, et condimentum nibh semper ac. Interdum et malesuada fames ac ante ipsum primis in faucibus."
        ctaLink="contact"
        ctaButton="Ask for a Quote"
      />

      {/* MEET THE TEAM */}
      <section className="pt-md-9 pb-md-9">
        <div className="container">
          <div className="row">
            <div className="col-md-11">
              <h2 className="mb-0 translate-text translate-up">
                <span>Meet the Team</span>
              </h2>
              <p
                className="lead mb-5 animated"
                data-animation="fadeInUp"
                data-animation-delay="150"
              >
                We design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          <div className="row">
            {/* TEAM MEMBERS */}
            <Teammember
              columns="col-sm-6 mb-5 mb-sm-0"
              teamImage="/demo/images/portfolio/project-12-min.jpg"
              teamAlt="Robert OHalloran"
              name="Robert O'Halloran"
              title="Developer"
            />

            <Teammember
              columns="col-sm-6 mb-5 mb-sm-0"
              teamImage="/demo/images/portfolio/project-12-min.jpg"
              teamAlt="Paul Gallagher"
              name="Paul Gallager"
              title="Designer"
            />
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default AboutPage
