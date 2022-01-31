import React from 'react';
import Moment from 'react-moment'
const ProfileExperience = (
    {experience}) => {
    // console.log(experience)
  return <div>
  <h3 className="text-dark">
  Company
  </h3>
  {experience.company}
  <p>
  <Moment format="YYYY/MM/DD">
  {experience.from}
  </Moment>-{!experience.to ? 'Now': <Moment format='YYYY/MM/DD'>{experience.to}</Moment>}</p>
<p>
<strong>Position:</strong>{ experience.title}
</p>
<p>
<strong>Description:</strong>{experience.description}
</p>
  </div>;
};

export default ProfileExperience;
