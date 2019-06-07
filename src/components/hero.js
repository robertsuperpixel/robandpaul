import React from "react"

const Hero = () => (
  <div id="page-hero" className="ed-page-hero">
    <section className="fullscreen-element pt-13 pt-md-10 pb-13 pb-md-10">
      <div className="overlay">
        <div className="hero-addon-b bg-light- bg-dark" />
        <div className="hero-addon-a addon-shadow">
          <div className="addon-inner">
            <div className="overlay-inner bg-image-holder bg-cover bg-bottom">
              <img src="/images/hero-001.jpg" alt="Background Image" />
            </div>
            <div className="overlay-inner bg-primary opacity-90" />
          </div>
        </div>
      </div>
      <div className="fe-container">
        <div className="fe-content align-middle">
          <div className="container text-center parallax-onscroll opacity-onscroll">
            <h1
              className="text-white mb-2 translate-text translate-up"
              data-translate-delay="150"
            >
              <span>Digital Design Agency</span>
            </h1>
            <p
              className="lead text-white translate-text translate-up"
              data-translate-delay="300"
            >
              <span>
                Bringing busines ideas to life through technology &amp; design.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Hero
