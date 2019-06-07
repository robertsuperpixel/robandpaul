import React from "react"
//import { Link } from "gatsby"

const Footer = () => (
  <footer className="site-footer footer-content-dark bg-light pt-md-9 pb-md-9">
    {/* FOOTER */}
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
)

export default Footer
