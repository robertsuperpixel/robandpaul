import React from "react"

const HeroPages = props => (
  <div id="page-hero" className="ed-page-hero">
    {/* HOME PAGE HERO */}
    <section class="pt-md-14 pb-md-9">
      <div class="overlay">
        <div class="hero-addon-b bg-light" />
        <div class="hero-addon-a addon-shadow bg-white" />
      </div>
      <div class="container parallax-onscroll opacity-onscroll text-center">
        <h1 class="mb-2 translate-text translate-up" data-translate-delay="150">
          <span>{props.headerTitle}</span>
        </h1>
        <p class="lead translate-text translate-up" data-translate-delay="300">
          <span>{props.headerDesc}</span>
        </p>
      </div>
    </section>
  </div>
)

export default HeroPages
