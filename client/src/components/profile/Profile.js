import React, { Fragment, useEffect } from "react";
import Spinner from "./../layout/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { getProfileById } from "./../../actions/profile";
import { Link } from "react-router-dom";
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
const Profile = ({ match }) => {
  console.log("INSIDE PROFILE COMP");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileById(match.params.id));
  }, [getProfileById]);

  const { profile, loading } = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}

        <div className="profile-grid my-1">
        <ProfileTop profile={profile}/>
        <ProfileAbout profile={profile}/>
        <div className="profile-exp bgwhite p-2">
        <h2 className="text-primary">
        Experience</h2>
        {profile.experience && profile.experience.length>0?(
          <Fragment>
          {
            profile.experience.map(experience=>(
              <ProfileExperience key={experience._id} experience={experience}/>
            ))
          }
          </Fragment>
        ):(<h4>No Experience found</h4>)}
        </div>
        <div className="profile-edu bgwhite p-2">
        <h2 className="text-primary">
        Education</h2>
        {profile.education && profile.education.length>0?(
          <Fragment>
          {
            profile.education.map(education=>(
              <ProfileEducation key={education._id} experience={education}/>
            ))
          }
          </Fragment>
        ):(<h4>No Education credentials</h4>)}
        </div>
        
        
        </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
