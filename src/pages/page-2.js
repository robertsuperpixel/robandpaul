import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout lightMenu={false}>
    <SEO title="Page two" />
    <div id="page-content" className="ed-page-content">
      <section className="pt-md-9 pb-md-9">
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <h1>Hi from the second page</h1>
              <p>Welcome to page 2</p>
              <Link to="/">Go back to the homepage</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default SecondPage
