import React from 'react'

const Activity = ({name})=> {
    const activityClassName = name.replace(/\s/g, '-')
    return (
        <li className={'icon ' + activityClassName}>{name}</li>
    )
}


const ActivitiesDetails = ({activities}) => (
  <section>
    <ul>
      {activities.map(name => <Activity name={name}/>)}
    </ul>
  </section>
)
export default ActivitiesDetails