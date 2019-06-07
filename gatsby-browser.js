/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onRouteUpdate = ({ location }) => {
  // will trigger the theme's code to re-activate
  if (window.setup) {
    window.setup(window.jQuery)
  }
}
