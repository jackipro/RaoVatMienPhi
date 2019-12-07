import React, { useState, Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
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
      <form className="ui form">
        <div className="unstackable two fields">
          <div className="field">
            <label>Website cá nhân</label>
            <div className="ui  input">
              <i class="globe big loading icon"></i>
              <input type="text" value={website} name="website" disabled />
            </div>
          </div>
          <div className="field">
            <label>Số điện thoại</label>
            <div className="ui  input">
              <i class="phone big icon"></i>
              <input type="text" value={phone} name="phone" disabled />
            </div>
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <label>Địa chỉ</label>
            <div className="ui  input">
              <i class="location big loading arrow icon"></i>
              <input type="text" value={location} name="location" disabled />
            </div>
          </div>
          <div className="field">
            <label>Giới thiệu</label>
            <div className="ui  input">
              <i class="user big  outline icon"></i>
              <input type="text" value={bio} name="bio" disabled />
            </div>
          </div>
        </div>

        <div className="field">
          <label>Facebook của bạn</label>
          <div className="ui  input">
            <a class="ui circular facebook icon button">
              <i class="facebook icon"></i>
            </a>
            <input type="text" value={facebook} name="facebook" disabled />
          </div>
        </div>
        <h1 classNamee="ui header">Các liên kết khác nếu có</h1>
        <div className="field">
          <label>Youtube</label>
          <div className="ui  input">
            <a class="ui circular youtube icon button">
              <i class="youtube icon"></i>
            </a>
            <input type="text" value={youtube} name="youtube" disabled />
          </div>
        </div>
        <div className="field">
          <label>Twitter</label>
          <div className="ui  input">
            <a class="ui circular facebook icon button">
              <i class="facebook icon"></i>
            </a>
            <input type="text" value={twitter} name="twitter" disabled />
          </div>
        </div>
        <div className="field">
          <label>Instagram</label>
          <div className="ui  input">
            <a class="ui circular instagram icon button">
              <i class="instagram icon"></i>
            </a>
            <input type="text" value={instagram} name="instagram" disabled />
          </div>
        </div>
        <div className="field">
          <label>Linkedin</label>
          <div className="ui  input">
            <a class="ui circular linkedin icon button">
              <i class="linkedin icon"></i>
            </a>
            <input type="text" value={linkedin} name="linkedin" disabled />
          </div>
        </div>
      </form>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile })(
  withRouter(Infomation)
);
