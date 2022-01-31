import React from 'react';
import Moment from 'react-moment'
const ProfileEducation = (
    {experience}) => {
    // console.log(experience)
  return <div>
  <h3 className="text-dark">
  {experience.school}
  </h3>
  <p>
  <Moment format="YYYY/MM/DD">
  {experience.from}
  </Moment>-{!experience.to ? 'Now': <Moment format='YYYY/MM/DD'>{experience.to}</Moment>}</p>
<p>
<strong>Degree:</strong>{ experience.degree}
</p>
<p>
<strong>Field Of study:</strong>{experience.fieldofstudy}
</p>
  </div>;
};

export default ProfileEducation;
