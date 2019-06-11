import React from "react"

const Service = props => {
  return (
    <div class="feature-block mb-5 mb-sm-0">
      <div
        className="feature-block-icon mb-4 text-primary animated"
        data-animation="fadeInUp"
        data-animation-delay="600"
      >
        <div>
          <i className={`${props.icon}`} />
        </div>
      </div>
      <h3 className="h4 mb-2 translate-text translate-up">
        <span>{props.serviceTitle}</span>
      </h3>
      <p
        className="animated"
        data-animation="fadeInUp"
        data-animation-delay="600"
      >
        <span>{props.serviceDescription}</span>
      </p>
    </div>
  )
}

export default Service
