import React, { useState, Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { Grid } from "semantic-ui-react";
import DashboardAction from "./DashboardAction";
const Infomation = ({
  profile: { profile, loading },

  getCurrentProfile
}) => {
  const [formData, setFormData] = useState({
    website: "",
    phone: "",
    location: "",
    bio: "",
    youtube: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: ""
  });
  const {
    website,
    phone,
    location,
    bio,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin
  } = formData;
  // const onChange = e =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = e => {
  //   e.preventDefault();
  //   createProfile(formData, history, true);
  // };

  useEffect(() => {
    getCurrentProfile();
    setFormData({
      website: loading || !profile.website ? "" : profile.website,
      phone: loading || !profile.phone ? "" : profile.phone,
      location: loading || !profile.location ? "" : profile.location,
      bio: loading || !profile.bio ? "" : profile.bio,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      instagram: loading || !profile.social ? "" : profile.social.instagram,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin
    });
  }, [loading]);

  return (
    <Fragment>
      <div style={{ margin: "0px 30px" }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <div className="banner-trangchu"></div>
            </Grid.Column>
            <Grid.Column width={10}>
              <form className="ui form">
                <div className="unstackable two fields">
                  <div className="field">
                    <label>Website cá nhân</label>
                    <div className="ui  input">
                      <i className="globe big loading icon"></i>
                      <input
                        type="text"
                        value={website}
                        name="website"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Số điện thoại</label>
                    <div className="ui  input">
                      <i className="phone big icon"></i>
                      <input type="text" value={phone} name="phone" disabled />
                    </div>
                  </div>
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>Địa chỉ</label>
                    <div className="ui  input">
                      <i className="location big loading arrow icon"></i>
                      <input
                        type="text"
                        value={location}
                        name="location"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Giới thiệu</label>
                    <div className="ui  input">
                      <i className="user big  outline icon"></i>
                      <input type="text" value={bio} name="bio" disabled />
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label>Facebook của bạn</label>
                  <div className="ui  input">
                    <a className="ui circular facebook icon button" href="!#">
                      <i className="facebook icon"></i>
                    </a>
                    <input
                      type="text"
                      value={facebook}
                      name="facebook"
                      disabled
                    />
                  </div>
                </div>
                <h1 className="ui header">Các liên kết khác nếu có</h1>
                <div className="field">
                  <label>Youtube</label>
                  <div className="ui  input">
                    <a className="ui circular youtube icon button" href="!#">
                      <i className="youtube icon"></i>
                    </a>
                    <input
                      type="text"
                      value={youtube}
                      name="youtube"
                      disabled
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Twitter</label>
                  <div className="ui  input">
                    <a className="ui circular facebook icon button" href="!#">
                      <i className="facebook icon"></i>
                    </a>
                    <input
                      type="text"
                      value={twitter}
                      name="twitter"
                      disabled
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Instagram</label>
                  <div className="ui  input">
                    <a className="ui circular instagram icon button" href="!#">
                      <i className="instagram icon"></i>
                    </a>
                    <input
                      type="text"
                      value={instagram}
                      name="instagram"
                      disabled
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Linkedin</label>
                  <div className="ui  input">
                    <a className="ui circular linkedin icon button" href="!#">
                      <i className="linkedin icon"></i>
                    </a>
                    <input
                      type="text"
                      value={linkedin}
                      name="linkedin"
                      disabled
                    />
                  </div>
                </div>
              </form>
              <DashboardAction />
            </Grid.Column>

            <Grid.Column width={3}>
              <div className="banner-doc"></div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile })(
  withRouter(Infomation)
);
