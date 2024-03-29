import React from "react";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div class="profile-about bg-light p-2">
      {bio && (
        <div>
          <h2 class="text-primary">{name}s Bio</h2>
          <p>{bio}</p>
          <div class="line" />
        </div>
      )}
      <h2 class="text-primary">Skill Set</h2>
      <div class="skills">
        {skills.map((skill, index) => (
          <div key={index} className="p1">
            <i className="fas fa-check"></i>
            {skill}
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default ProfileAbout;
