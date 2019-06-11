import React from "react"
import Layout from "../components/layout"
import HeroPages from "../components/hero-pages"
import PortfolioNav from "../components/portfolio-filter"
import PortfolioTile from "../components/portfolio-tile"

const PortfolioPage = () => (
  <Layout lightMenu={false}>
    {/* HERO COMPONENT */}
    <HeroPages
      headerTitle="Portfolio"
      headerDesc="Creative for all intents and purposes."
    />

    {/* PAGE CONTENT */}
    <div id="page-content" className="ed-page-content">
      {/* PORTFOLIO SECTION */}
      <section className="pt-md-9 pb-md-9">
        <div className="container">
          {/* PORTFOLIO NAV */}
          <PortfolioNav />
        </div>
        <div className="container-fluid">
          <div className="masonry-wrapper masonry-style-2">
            <div className="masonry-container" data-column-width=".col-md-4">
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

export default PortfolioPage
