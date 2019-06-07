import React from "react"
//import { Link } from "gatsby"

const Footer = () => (
  <footer className="site-footer footer-content-dark bg-light pt-md-9 pb-md-9">
    {/* FOOTER */}
    <div className="container">
      <div className="">
        <h2>Follow us!</h2>
      </div>
      <nav className="socials-icons">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/robandpaul"
              target="_blank"
              className="social-icon"
            >
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/robandpaul.ie/"
              target="_blank"
              className="social-icon"
            >
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a
              href="http://robandpaul.dribbble.com/"
              target="_blank"
              className="social-icon"
            >
              <i className="fa fa-dribbble" />
            </a>
          </li>
        </ul>
      </nav>
      <p className="copyright mb-3">© Copyright 2019. All Rights Reserved.</p>
    </div>
  </footer>
)

export default Footer
