/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Footer from "./footer"
//import PropTypes from "prop-types"
//import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
//import "./layout.css"

const Layout = props => (
  <>
    <div className="preloader preloader-dark">
      <div className="transition-overlay transition-a bg-dark opacity-85"></div>
      <div className="transition-overlay transition-b bg-dark"></div>
      <div className="loader-status">
        <div className="circle-side"></div>
      </div>
    </div>
    <main className="main-container">
      <Header
        lightMenu={props.lightMenu === undefined ? true : props.lightMenu}
      />

      {/* Back To Top Button */}
      <a href="#" className="function-btn backtotop scrollto">
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </a>

      {/* PAGE */}
      <div id="page" className="ed-page">
        {props.children}
      </div>
    </main>

    <Footer></Footer>
  </>
)

//Layout.propTypes = {
//  children: PropTypes.node.isRequired,
//}

export default Layout
