import { Link } from "gatsby"
import React from "react"

const CallToAction = props => {
  return (
    <section className="pt-md-14 pb-md-14">
      <div className="overlay ml-lg-7 mr-lg-7">
        <div className="overlay-inner bg-image-holder bg-cover bg-center">
          <img src={props.ctaImage} alt={props.ctaAlt} />
        </div>
        <div className="overlay-inner bg-dark opacity-40" />
      </div>
      <div className="container text-center">
        <h2
          className="text-white mb-2 translate-text translate-up"
          data-translate-delay="150"
        >
          <span>{props.ctaTitle}</span>
        </h2>
        <p className="lead text-white mb-5">{props.ctaDescription}</p>
        <Link
          to={`${props.ctaLink}`}
          className="ajax-link btn btn-primary btn-shadow"
        >
          {props.ctaButton}
        </Link>
      </div>
    </section>
  )
}

export default CallToAction
