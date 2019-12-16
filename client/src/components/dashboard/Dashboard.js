import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { Header } from "semantic-ui-react";
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
      <div className="banner-infomation"></div>
      <div style={{ textAlign: "center" }}>
        <Header as="h1" inverted color="yellow">
          Thông tin cá nhân
        </Header>
        <h2 className="ui header">
          <img src={user.avatar} className="ui circular image" alt="/" />
          Xin chào {user && user.name}
        </h2>
      </div>

      {profile !== null ? (
        <Fragment></Fragment>
      ) : (
        <Fragment>Bạn chưa có thông tin cá nhân</Fragment>
      )}
      <Infomation />
    </Fragment>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
