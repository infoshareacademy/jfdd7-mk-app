import React from 'react'

const ActivitiesDetails = ({activities}) => (
  <section>
    {activities.map(func => <p>{func}</p>)}
  </section>
)
export default ActivitiesDetails