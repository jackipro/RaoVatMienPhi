import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import DashboardAction from "./DashboardAction";
import Infomation from "./Infomation";
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
      <h2 className="ui header">
        <img src={user.avatar} className="ui circular image" />
        Xin chào {user && user.name}
      </h2>
      {profile !== null ? (
        <Fragment></Fragment>
      ) : (
        <Fragment>Bạn chưa có thông tin cá nhân</Fragment>
      )}
      <Infomation />
      <DashboardAction />
      <div className="banner-login"></div>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
