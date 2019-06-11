import React from "react"

const PortfolioNav = () => {
  return (
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
        <li>
          <a href="#" data-filter=".print">
            Print
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default PortfolioNav
