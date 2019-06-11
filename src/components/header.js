import { Link } from "gatsby"
import React from "react"

const Header = props => (
  <header
    className={`main-header menu-${
      props.lightMenu ? "light" : "dark"
    } mobile-header-light mobile-menu-dark`}
  >
    <div className="header-container">
      <div className="brand-block">
        {/* LOGO */}
        <a className="logo-block ajax-link" href="/">
          <img
            className="logo-light logo"
            src="images/robandpaul-logo.svg"
            alt="Rob&amp;Paul"
          />
          <img
            className="logo-dark logo"
            src="images/robandpaul-logo.svg"
            alt="Rob&amp;Paul"
          />
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
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="/about" className="ajax-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="ajax-link">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="ajax-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
