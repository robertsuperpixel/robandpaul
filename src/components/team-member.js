import React from "react"

const TeamMember = props => {
  return (
    <div className={`${props.columns}`}>
      <div className="profile-block">
        <div className="user-image mb-3">
          <img src={props.teamImage} alt={props.teamAlt} />
        </div>
        <h5 className="h4 mb-1">{props.name}</h5>
        <p className="role">{props.title}</p>
      </div>
    </div>
  )
}

export default TeamMember
