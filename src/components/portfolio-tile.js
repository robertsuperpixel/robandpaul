import { Link } from "gatsby"
import React from "react"

const PortfolioTile = props => {
  return (
    <div className={`${props.columns}`}>
      <div className="portfolio-item item-h-4 hover-zoom">
        <Link to={`${props.portLink}`} className="ajax-link">
          <div className="item-image bg-image-holder">
            <img src={props.portImg} alt={props.portAlt} />
          </div>
          <div className="item-overlay overlay-alt" />
          <div className="item-details details-inside">
            <h4 className="item-title text-white">{props.portTitle}</h4>
            <p className="item-cat">{props.portCat}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PortfolioTile
