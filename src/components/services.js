import React from "react"
import styles from "../styles/ionicons.min"

const Service = props => {
  return (
    <div className="feature-block mb-5">
      <div
        className="feature-block-icon mb-4 text-primary animated"
        data-animation="fadeInUp"
      >
        <div>
          <div className={styles.description} />
          <i className={styles.icon} />
        </div>
      </div>
      <h3 className="h4 mb-2 translate-text translate-up">
        <span>{props.serviceTitle}</span>
      </h3>
      <p className="translate-text translate-up" data-translate-delay="150">
        <span>{props.serviceDescription}</span>
      </p>
    </div>
  )
}

export default Service
