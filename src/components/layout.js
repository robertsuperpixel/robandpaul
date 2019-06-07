/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
//import PropTypes from "prop-types"
//import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
//import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />

    <main>{children}</main>

    {/* FOOTER */}
    <footer className="site-footer footer-content-dark bg-light pt-md-9 pb-md-9">
      <div className="container">
        <nav className="socials-icons">
          <ul>
            <li>
              <a href="#" className="social-icon">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="social-icon">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="social-icon">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="social-icon">
                <i className="fa fa-pinterest" />
              </a>
            </li>
          </ul>
        </nav>
        <p className="copyright mb-3">© 2017 Trila - All Rights Reserved</p>
      </div>
    </footer>
  </>
)

//Layout.propTypes = {
//  children: PropTypes.node.isRequired,
//}

export default Layout
