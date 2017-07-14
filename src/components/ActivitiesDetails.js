import React from 'react'

const Activity = ({name})=> {
    const activityClassName = name.replace(/\s/g, '-')
    return (
        <li className={'icon ' + activityClassName}>{name}</li>
    )
}


const ActivitiesDetails = ({activities}) => (
  <section className="activities-details" >
      <h4>Oferta</h4>
    <ul className="list-activities">
      {activities.map(name => <Activity name={name}/>)}
    </ul>
  </section>
)
export default ActivitiesDetails