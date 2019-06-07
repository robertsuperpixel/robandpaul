import React from "react"
import Layout from "../components/layout"
//import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    {/* PAGE HERO */}
    <div id="page-hero" className="ed-page-hero">
      <section className="fullscreen-element pt-13 pt-md-10 pb-13 pb-md-10">
        <div className="overlay">
          <div className="hero-addon-b bg-light- bg-dark"></div>
          <div className="hero-addon-a addon-shadow">
            <div className="addon-inner">
              <div className="overlay-inner bg-image-holder bg-cover bg-bottom">
                <img src="demo/images/image-2.jpg" alt="background" />
              </div>
              <div className="overlay-inner bg-primary opacity-90"></div>
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
                <span>Marketing & Creative Agency</span>
              </h1>
              <p
                className="lead text-white translate-text translate-up"
                data-translate-delay="300"
              >
                <span>
                  We launch new brands and create digital products for creative
                  peoples.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* PAGE CONTENT */}
    <div id="page-content" className="ed-page-content">
      <section className="pt-md-9 pb-md-9">
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <h2 className="mb-2 translate-text translate-up">
                <span>Creative talent, real estate expertise</span>
              </h2>
              <p
                className="lead mb-5 translate-text translate-up"
                data-translate-delay="150"
              >
                <span>
                  Donec sollicitudin libero vitae massa placerat tempor. Duis
                  rutrum nisl eu ipsum varius, nec feugiat tortor vulputate.
                  Integer pellentesque leo id metus dictum, a tristique tellus
                  faucibus.
                </span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="feature-block mb-5">
                <div
                  className="feature-block-icon mb-4 text-primary animated"
                  data-animation="fadeInUp"
                >
                  <div>
                    <i className="ion-ios-speedometer-outline"></i>
                  </div>
                </div>
                <h3 className="h4 mb-2 translate-text translate-up">
                  <span>Launch Quickly</span>
                </h3>
                <p
                  className="translate-text translate-up"
                  data-translate-delay="150"
                >
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </span>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="feature-block mb-5">
                <div
                  className="feature-block-icon mb-4 text-primary animated"
                  data-animation="fadeInUp"
                  data-animation-delay="150"
                >
                  <div>
                    <i className="ion-ios-star-outline"></i>
                  </div>
                </div>
                <h3
                  className="h4 mb-2 translate-text translate-up"
                  data-translate-delay="150"
                >
                  <span>Stylish Design</span>
                </h3>
                <p
                  className="translate-text translate-up"
                  data-translate-delay="300"
                >
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </span>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="feature-block mb-5">
                <div
                  className="feature-block-icon mb-4 text-primary animated"
                  data-animation="fadeInUp"
                  data-animation-delay="300"
                >
                  <div>
                    <i className="ion-ios-book-outline"></i>
                  </div>
                </div>
                <h3
                  className="h4 mb-2 translate-text translate-up"
                  data-translate-delay="300"
                >
                  <span>Well Documented</span>
                </h3>
                <p
                  className="translate-text translate-up"
                  data-translate-delay="450"
                >
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </span>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="feature-block mb-5">
                <div
                  className="feature-block-icon mb-4 text-primary animated"
                  data-animation="fadeInUp"
                  data-animation-delay="450"
                >
                  <div>
                    <i className="ion-ios-photos-outline"></i>
                  </div>
                </div>
                <h3
                  className="h4 mb-2 translate-text translate-up"
                  data-translate-delay="450"
                >
                  <span>Parallax Background</span>
                </h3>
                <p
                  className="translate-text translate-up"
                  data-translate-delay="600"
                >
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </span>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="feature-block mb-5 mb-sm-0">
                <div
                  className="feature-block-icon mb-4 text-primary animated"
                  data-animation="fadeInUp"
                  data-animation-delay="600"
                >
                  <div>
                    <i className="ion-ios-settings"></i>
                  </div>
                </div>
                <h3
                  className="h4 mb-2 translate-text translate-up"
                  data-translate-delay="600"
                >
                  <span>Fully Customizable</span>
                </h3>
                <p
                  className="translate-text translate-up"
                  data-translate-delay="750"
                >
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </span>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="feature-block">
                <div
                  className="feature-block-icon mb-4 text-primary animated"
                  data-animation="fadeInUp"
                  data-animation-delay="750"
                >
                  <div>
                    <i className="ion-ios-chatboxes-outline"></i>
                  </div>
                </div>
                <h3
                  className="h4 mb-2 translate-text translate-up"
                  data-translate-delay="750"
                >
                  <span>Friendly Support</span>
                </h3>
                <p
                  className="translate-text translate-up"
                  data-translate-delay="900"
                >
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-md-9 pb-md-9">
        <div className="overlay ml-lg-7 mr-lg-7">
          <div className="overlay-inner bg-light"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <h2 className="mb-0 translate-text translate-up">
                <span>A complete marketing solution</span>
              </h2>
              <p
                className="lead mb-5 translate-text translate-up"
                data-translate-delay="150"
              >
                <span>
                  Donec sollicitudin libero vitae massa placerat tempor. Duis
                  rutrum nisl eu ipsum varius, nec feugiat tortor vulputate.
                  Integer pellentesque leo id metus dictum, a tristique tellus
                  faucibus.
                </span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-2 mb-5">
              <h4 className="heading-uppercase">We are</h4>
              <p>
                Quisque ultrices non velit sit amet consectetur. Cras turpis
                dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla
                rutrum arcu sed ligula malesuada, quis condimentum eros
                sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien.
                Aliquam et est turpis. Sed sit amet dui vel sapien sagittis
                pellentesque nec id sem.
              </p>
            </div>
            <div className="col-md-10 col-md-offset-2 mb-5">
              <h4 className="heading-uppercase">We practice</h4>
              <p>
                Quisque ultrices non velit sit amet consectetur. Cras turpis
                dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla
                rutrum arcu sed ligula malesuada, quis condimentum eros
                sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien.
                Aliquam et est turpis. Sed sit amet dui vel sapien sagittis
                pellentesque nec id sem.
              </p>
            </div>
            <div className="col-md-10 col-md-offset-2 mb-5">
              <h4 className="heading-uppercase">We deliver</h4>
              <p>
                Quisque ultrices non velit sit amet consectetur. Cras turpis
                dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla
                rutrum arcu sed ligula malesuada, quis condimentum eros
                sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien.
                Aliquam et est turpis. Sed sit amet dui vel sapien sagittis
                pellentesque nec id sem.
              </p>
            </div>
            <div className="col-md-10 col-md-offset-2">
              <h4 className="heading-uppercase">We create and innovate</h4>
              <p>
                Quisque ultrices non velit sit amet consectetur. Cras turpis
                dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla
                rutrum arcu sed ligula malesuada, quis condimentum eros
                sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien.
                Aliquam et est turpis. Sed sit amet dui vel sapien sagittis
                pellentesque nec id sem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-md-9 pb-md-9">
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <h2 className="mb-0 translate-text translate-up">
                <span>Our work</span>
              </h2>
              <p
                className="lead mb-5 translate-text translate-up"
                data-translate-delay="150"
              >
                <span>
                  Donec sollicitudin libero vitae massa placerat tempor. Duis
                  rutrum nisl eu ipsum varius, nec feugiat tortor vulputate.
                  Integer pellentesque leo id metus dictum, a tristique tellus
                  faucibus.
                </span>
              </p>
              <nav
                className="portfolio-filter masonry-filter mb-5 animated"
                data-animation="fadeInUp"
                data-animation-delay="150"
              >
                <ul>
                  <li>
                    <a href="#" className="active" data-filter="*">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".web">
                      Web
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".brand">
                      Brand
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".design">
                      Design
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="masonry-wrapper masonry-style-2">
            <div className="masonry-container" data-column-width=".col-md-4">
              <div className="masonry-item col-md-8 col-sm-6 col-xs-12 web">
                <div className="portfolio-item item-h-4 hover-zoom">
                  <a href="portfolio-single-1.html" className="ajax-link">
                    <div className="item-image bg-image-holder">
                      <img
                        src="demo/images/portfolio/project-6-min.jpg"
                        alt=""
                      />
                    </div>
                    <div className="item-overlay overlay-alt"></div>
                    <div className="item-details details-inside">
                      <h4 className="item-title text-white">Mountains</h4>
                      <p className="item-cat">Web Design</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="masonry-item col-md-4 col-sm-6 col-xs-12 web">
                <div className="portfolio-item item-h-4 hover-zoom">
                  <a href="portfolio-single-2.html" className="ajax-link">
                    <div className="item-image bg-image-holder">
                      <img
                        src="demo/images/portfolio/project-1-min.jpg"
                        alt="background"
                      />
                    </div>
                    <div className="item-overlay overlay-alt"></div>
                    <div className="item-details details-inside">
                      <h4 className="item-title text-white">Love</h4>
                      <p className="item-cat">Web Design</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="masonry-item col-md-4 col-sm-6 col-xs-12 brand">
                <div className="portfolio-item item-h-4 hover-zoom">
                  <a href="portfolio-single-1.html" className="ajax-link">
                    <div className="item-image bg-image-holder">
                      <img
                        src="demo/images/portfolio/project-2-min.jpg"
                        alt=""
                      />
                    </div>
                    <div className="item-overlay overlay-alt"></div>
                    <div className="item-details details-inside">
                      <h4 className="item-title text-white">Beautiful Girl</h4>
                      <p className="item-cat">Brand</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="masonry-item col-md-8 col-sm-6 col-xs-12 web">
                <div className="portfolio-item item-h-4 hover-zoom">
                  <a href="portfolio-single-2.html" className="ajax-link">
                    <div className="item-image bg-image-holder">
                      <img
                        src="demo/images/portfolio/project-3-min.jpg"
                        alt=""
                      />
                    </div>
                    <div className="item-overlay overlay-alt"></div>
                    <div className="item-details details-inside">
                      <h4 className="item-title text-white">Future City</h4>
                      <p className="item-cat">Web Design</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="masonry-item col-md-8 col-sm-6 col-xs-12 design">
                <div className="portfolio-item item-h-4 hover-zoom">
                  <a href="portfolio-single-1.html" className="ajax-link">
                    <div className="item-image bg-image-holder">
                      <img
                        src="demo/images/portfolio/project-4-min.jpg"
                        alt=""
                      />
                    </div>
                    <div className="item-overlay overlay-alt"></div>
                    <div className="item-details details-inside">
                      <h4 className="item-title text-white">
                        Golden Gate Bridge
                      </h4>
                      <p className="item-cat">Design</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="masonry-item col-md-4 col-sm-6 col-xs-12 web">
                <div className="portfolio-item item-h-4 hover-zoom">
                  <a href="portfolio-single-1.html" className="ajax-link">
                    <div className="item-image bg-image-holder">
                      <img
                        src="demo/images/portfolio/project-9-min.jpg"
                        alt=""
                      />
                    </div>
                    <div className="item-overlay overlay-alt"></div>
                    <div className="item-details details-inside">
                      <h4 className="item-title text-white">Beach</h4>
                      <p className="item-cat">Web Design</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="masonry-item col-md-4 col-sm-6 col-xs-12 web">
                <div className="portfolio-item item-h-4 hover-zoom">
                  <a href="portfolio-single-2.html" className="ajax-link">
                    <div className="item-image bg-image-holder">
                      <img
                        src="demo/images/portfolio/project-10-min.jpg"
                        alt=""
                      />
                    </div>
                    <div className="item-overlay overlay-alt"></div>
                    <div className="item-details details-inside">
                      <h4 className="item-title text-white">Adventure</h4>
                      <p className="item-cat">Web Design</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="masonry-item col-md-8 col-sm-6 col-xs-12 web">
                <div className="portfolio-item item-h-4 hover-zoom">
                  <a href="portfolio-single-2.html" className="ajax-link">
                    <div className="item-image bg-image-holder">
                      <img
                        src="demo/images/portfolio/project-11-min.jpg"
                        alt=""
                      />
                    </div>
                    <div className="item-overlay overlay-alt"></div>
                    <div className="item-details details-inside">
                      <h4 className="item-title text-white">Waterfall</h4>
                      <p className="item-cat">Web Design</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* .masonry-container end */}
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
