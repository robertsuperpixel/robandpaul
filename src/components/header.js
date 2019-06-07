//import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header className="main-header menu-light mobile-header-light mobile-menu-dark">
    <div className="header-container">
      <div className="brand-block">
        {/* LOGO */}
        <a className="logo-block ajax-link" href="index.html">
          <img className="logo-light" src="images/logo.png" alt="" />
          <img className="logo-dark" src="images/logo-dark.png" alt="" />
        </a>
        <button type="button" className="nav-toggle">
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="nav-block">
        <nav className="main-nav">
          <ul>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">
                Home
              </a>
              <ul className="dropdown-nav">
                <li>
                  <a href="index-agency-1.html" className="ajax-link">
                    Agency 1
                  </a>
                </li>
                <li>
                  <a href="index-agency-2.html" className="ajax-link">
                    Agency 2
                  </a>
                </li>
                <li>
                  <a href="index-portfolio-1.html" className="ajax-link">
                    Portfolio 1
                  </a>
                </li>
                <li>
                  <a href="index-portfolio-2.html" className="ajax-link">
                    Portfolio 2
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about-1.html" className="ajax-link">
                About
              </a>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">
                Portfolio
              </a>
              <ul className="dropdown-nav">
                <li>
                  <a href="portfolio-masonry-1.html" className="ajax-link">
                    Masonry 1
                  </a>
                </li>
                <li>
                  <a href="portfolio-masonry-2.html" className="ajax-link">
                    Masonry 2
                  </a>
                </li>
                <li>
                  <a href="portfolio-masonry-3.html" className="ajax-link">
                    Masonry 3
                  </a>
                </li>
                <li>
                  <a href="portfolio-masonry-4.html" className="ajax-link">
                    Masonry 4
                  </a>
                </li>
                <li>
                  <a href="portfolio-one-column.html" className="ajax-link">
                    One Column
                  </a>
                </li>
                <li>
                  <a href="portfolio-fullwidth.html" className="ajax-link">
                    Fullwidth
                  </a>
                </li>
                <li>
                  <a href="portfolio-lightbox.html" className="ajax-link">
                    Lightbox
                  </a>
                </li>
                <li>
                  <a href="portfolio-single-1.html" className="ajax-link">
                    Single 1
                  </a>
                </li>
                <li>
                  <a href="portfolio-single-2.html" className="ajax-link">
                    Single 2
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="services-1.html" className="ajax-link">
                Services
              </a>
            </li>
            <li className="dropdown mb-0">
              <a href="#" className="dropdown-toggle">
                Contact
              </a>
              <ul className="dropdown-nav dropdown-pos-invert">
                <li>
                  <a href="contact-1.html" className="ajax-link">
                    Style - 1
                  </a>
                </li>
                <li>
                  <a href="contact-2.html" className="ajax-link">
                    Style - 2
                  </a>
                </li>
                <li>
                  <a href="contact-3.html" className="ajax-link">
                    Style - 3
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="elements.html" className="ajax-link">
                Elements
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
