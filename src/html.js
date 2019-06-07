import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="css/custom.css" rel="stylesheet" type="text/css" />
        <link
          href="css/font-awesome.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="css/ionicons.min.css" rel="stylesheet" type="text/css" />
        <link href="css/animate.min.css" rel="stylesheet" type="text/css" />
        <link href="css/slick.min.css" rel="stylesheet" type="text/css" />
        <link
          href="css/magnific-popup.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,300i,400,400i,700,700i%7CMontserrat:100,200,300,400,500,700"
          rel="stylesheet"
        />
        <script type="text/javascript" src="js/modernizr-custom.js" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script type="text/javascript" src="js/jquery.min.js" />
        <script type="text/javascript" src="js/jquery.easing.min.js" />
        <script type="text/javascript" src="js/bootstrap.min.js" />
        <script type="text/javascript" src="js/imagesloaded.pkgd.min.js" />
        <script type="text/javascript" src="js/jquery.waypoints.min.js" />
        <script type="text/javascript" src="js/isotope.pkgd.min.js" />
        <script type="text/javascript" src="js/jquery.smooth-scroll.min.js" />
        <script type="text/javascript" src="js/jquery.validate.min.js" />
        <script type="text/javascript" src="js/jquery.form.min.js" />
        <script type="text/javascript" src="js/jquery.magnific-popup.min.js" />
        <script type="text/javascript" src="js/slick.min.js" />
        <script
          type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js"
        />
        <script type="text/javascript" src="js/gmaps.min.js" />
        <script type="text/javascript" src="js/SmoothScroll.js" />

        <script type="text/javascript" src="js/main.js" />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
