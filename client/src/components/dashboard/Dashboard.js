import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
const Dashboard = ({
  getCurrentProfile,
  auth: { user, avatar },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className=" ui header">Thông tin cá nhân</h1>
      <h2 class="ui header">
        <img src={avatar} class="ui circular image" />
        {user && user.name}
      </h2>
      {profile !== null ? (
        <Fragment>has</Fragment>
      ) : (
        <Fragment>Bạn chưa có thông tin cá nhân</Fragment>
      )}
    </Fragment>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
