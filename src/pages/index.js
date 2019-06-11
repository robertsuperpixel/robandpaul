import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Service from "../components/services"
import PortfolioNav from "../components/portfolio-filter"
import PortfolioTile from "../components/portfolio-tile"

const IndexPage = () => (
  <Layout>
    {/* HERO COMPONENT */}
    <Hero />

    {/* PAGE CONTENT */}
    <div id="page-content" className="ed-page-content">
      {/* WHAT WE DO / SERVICES SECTION */}
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

          {/* SERVICES */}
          <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h2 class="h1 mb-5 translate-text translate-up">
                <span>What we do</span>
              </h2>
              <p
                class="lead mb-5 translate-text translate-up"
                data-translate-delay="150"
              >
                <span>
                  Donec sollicitudin libero vitae massa placerat tempor. Duis
                  rutrum nisl eu ipsum varius, nec feugiat tortor vulputate.
                  Integer pellentesque leo id metus dictum, a tristique tellus
                  faucibus.
                </span>
              </p>
              <div
                class="divider divider-alt divider-dark h-fixed-4 mt-0 mb-0 animated"
                data-animation="fadeInUp"
                data-animation-delay="150"
              />
            </div>
            <div class="col-lg-6 col-lg-offset-2">
              <div class="row">
                <div className="col-md-6 col-sm-6">
                  {/* SERVICES COMPONENT */}
                  <Service
                    icon="ion-ios-speedometer-outline"
                    serviceTitle="Responsive Web Design"
                    serviceDescription="Our core strength, we create beautiful and engaging websites for businesses big and small."
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <Service
                    icon="ion-ios-speedometer-outline"
                    serviceTitle="Responsive Web Design"
                    serviceDescription="Our core strength, we create beautiful and engaging websites for businesses big and small."
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <Service
                    icon="ion-ios-speedometer-outline"
                    serviceTitle="Responsive Web Design"
                    serviceDescription="Our core strength, we create beautiful and engaging websites for businesses big and small."
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <Service
                    icon="ion-ios-speedometer-outline"
                    serviceTitle="Responsive Web Design"
                    serviceDescription="Our core strength, we create beautiful and engaging websites for businesses big and small."
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <Service
                    icon="ion-ios-speedometer-outline"
                    serviceTitle="Responsive Web Design"
                    serviceDescription="Our core strength, we create beautiful and engaging websites for businesses big and small."
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <Service
                    icon="ion-ios-speedometer-outline"
                    serviceTitle="Responsive Web Design"
                    serviceDescription="Our core strength, we create beautiful and engaging websites for businesses big and small."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="pt-md-9 pb-md-9">
        <div className="overlay ml-lg-7 mr-lg-7">
          <div className="overlay-inner bg-light" />
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

      {/* PORTFOLIO SECTION */}
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
              {/* PORTFOLIO NAV */}
              <PortfolioNav />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="masonry-wrapper masonry-style-2">
            <div className="masonry-container" data-column-width=".col-md-4">
              {/* <div className="masonry-item col-md-8 col-sm-6 col-xs-12 web">
                <div className="portfolio-item item-h-4 hover-zoom">
                  <a href="portfolio-single-1.html" className="ajax-link">
                    <div className="item-image bg-image-holder">
                      <img
                        src="demo/images/portfolio/project-6-min.jpg"
                        alt=""
                      />
                    </div>
                    <div className="item-overlay overlay-alt" />
                    <div className="item-details details-inside">
                      <h4 className="item-title text-white">Mountains</h4>
                      <p className="item-cat">Web Design</p>
                    </div>
                  </a>
                </div>
              </div> */}

              <PortfolioTile
                columns="masonry-item col-md-8 col-sm-6 col-xs-12 web"
                portLink="page-2"
                portImg="/images/hero-001.jpg"
                portAlt="A nice background"
                portTitle="A nice item"
                portCat="Print"
              />

              <PortfolioTile
                columns="masonry-item col-md-4 col-sm-6 col-xs-12 print"
                portLink="page-2"
                portImg="/images/hero-001.jpg"
                portAlt="Lovely"
                portTitle="A nice print"
                portCat="Print"
              />

              <PortfolioTile
                columns="masonry-item col-md-4 col-sm-6 col-xs-12 web"
                portLink="page-2"
                portImg="/images/hero-001.jpg"
                portAlt="Lovely"
                portTitle="Another nice item"
                portCat="Web"
              />

              <PortfolioTile
                columns="masonry-item col-md-8 col-sm-6 col-xs-12 brand"
                portLink="page-2"
                portImg="/images/hero-001.jpg"
                portAlt="Lovely"
                portTitle="Another nice item 2"
                portCat="Brand"
              />

              <PortfolioTile
                columns="masonry-item col-md-4 col-sm-6 col-xs-12 web"
                portLink="page-2"
                portImg="/images/hero-001.jpg"
                portAlt="Lovely"
                portTitle="Another nice item"
                portCat="Web"
              />

              <PortfolioTile
                columns="masonry-item col-md-4 col-sm-6 col-xs-12 web"
                portLink="page-2"
                portImg="/images/hero-001.jpg"
                portAlt="Lovely"
                portTitle="Another nice item"
                portCat="Web"
              />

              <PortfolioTile
                columns="masonry-item col-md-4 col-sm-6 col-xs-12 web"
                portLink="page-2"
                portImg="/images/hero-001.jpg"
                portAlt="Lovely"
                portTitle="Another nice item"
                portCat="Web"
              />
            </div>
            {/* .masonry-container end */}
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
