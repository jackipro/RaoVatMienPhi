import React, { useState, Fragment, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
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
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

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
      <div className="banner-profile"></div>
      <form className="ui form" onSubmit={e => onSubmit(e)}>
        <h1 classNamee="ui header">Tạo thông tin cá nhân của bạn</h1>
        <div className="unstackable two fields">
          <div className="field">
            <label>Website cá nhân</label>
            <div className="ui input">
              <input
                type="text"
                placeholder="Web cá nhân"
                value={website}
                name="website"
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label>Số điện thoại</label>
            <div className="ui input">
              <input
                type="text"
                placeholder="Số điện thoại"
                value={phone}
                name="phone"
                onChange={e => onChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <label>Địa chỉ</label>
            <div className="ui input">
              <input
                type="text"
                placeholder="Địa chỉ"
                value={location}
                name="location"
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label>Giới thiệu một chút về bạn nhé</label>
            <div className="ui input">
              <input
                type="text"
                placeholder="Giới thiệu"
                value={bio}
                name="bio"
                onChange={e => onChange(e)}
              />
            </div>
          </div>
        </div>

        <div className="field">
          <label>Facebook của bạn</label>
          <div className="ui  input">
            <button class="ui facebook button">
              <i class="facebook icon"></i>
              Facebook
            </button>
            <input
              type="text"
              placeholder="Facebook"
              value={facebook}
              name="facebook"
              onChange={e => onChange(e)}
            />
          </div>
        </div>
        <h1 classNamee="ui header">Các liên kết khác nếu có</h1>
        <div className="field">
          <label>Youtube</label>
          <div className="ui input">
            <button class="ui youtube button">
              <i class="youtube icon"></i>
              Youtube
            </button>
            <input
              type="text"
              placeholder="Nhập URL đến liên kết Youtube"
              value={youtube}
              name="youtube"
              onChange={e => onChange(e)}
            />
          </div>
        </div>
        <div className="field">
          <label>Twitter</label>
          <div className="ui input">
            <button class="ui twitter button">
              <i class="twitter icon"></i>
              Twitter
            </button>
            <input
              type="text"
              placeholder="Nhập URL đến liên kết Twitter"
              value={twitter}
              name="twitter"
              onChange={e => onChange(e)}
            />
          </div>
        </div>
        <div className="field">
          <label>Instagram</label>
          <div className="ui input">
            <button class="ui instagram button">
              <i class="instagram icon"></i>
              Instagram
            </button>
            <input
              type="text"
              placeholder="Nhập URL đến liên kết Instagram"
              value={instagram}
              name="instagram"
              onChange={e => onChange(e)}
            />
          </div>
        </div>
        <div className="field">
          <label>Linkedin</label>
          <div className="ui input">
            <button class="ui linkedin button">
              <i class="linkedin icon"></i>
              Linkedin
            </button>
            <input
              type="text"
              placeholder="Nhập URL đến liên kết Linkedin"
              value={linkedin}
              name="linkedin"
              onChange={e => onChange(e)}
            />
          </div>
        </div>

        <button type="submit" className="ui button">
          Submit
        </button>
      </form>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
