import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import DashBoardActions from "./DashBoard.Actions";
import Experience from "./../profile-forms/Experience";
import Education from "./../profile-forms/Education";
const Dashboard = () => {
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [getCurrentProfile]);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const user = auth.user;

  if (!profile.profile && profile.loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div>
          <p className="lead">
            <i className="fas fa-user"></i> Welcome {user && user.name}
          </p>
          <h1 className="large text-primary">Dashboard</h1>
        </div>
        {profile.profile !== null ? (
          <div>
            <DashBoardActions />
            <Experience />
            <Education />
          </div>
        ) : (
          <div>
            <p>You have not setup a profile,please add some info </p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              Create Profile
            </Link>
          </div>
        )}
      </div>
    );
  }
};

export default Dashboard;
