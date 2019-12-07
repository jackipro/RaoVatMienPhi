import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/icon2.png";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLink = (
    <div className="right menu">
      <div className="item">
        <div className="ui tiny buttons">
          <Link to="/addpost" className="ui  black  button">
            <i className="arrows plus icon"></i>
            Đăng bài
          </Link>
        </div>
      </div>
      <div className="item">
        <div className="ui tiny buttons">
          <Link to="/dashboard" className="ui inverted primary button">
            <i className="user circle icon"></i>
            Thông tin cá nhân
          </Link>
          <div className="or"></div>
          <Link to="/createprofile" className="ui primary button">
            <i className="user plus icon"></i>
            Cập nhật thông tin cá nhân
          </Link>
        </div>
      </div>

      <div className="item">
        <div className="ui tiny buttons">
          <a onClick={logout} className="ui  inverted red  button">
            <i className="arrows sign-out icon"></i>
            Đăng xuất
          </a>
        </div>
      </div>
    </div>
  );
  const guestLink = (
    <div className="right menu">
      <div className="item">
        <div className="ui tiny buttons">
          <Link to="/register" className="ui black basic button">
            <i className="arrows user icon"></i>
            Đăng Ký
          </Link>
          <div className="or"></div>
          <Link to="/login" className="ui inverted yellow  button">
            <i className="arrows sign-in icon"></i>
            Đăng Nhập
          </Link>
        </div>
      </div>
    </div>
  );
  return (
    <div className="ui small   menu  ">
      <div className="item">
        <img src={Logo} alt="/" />
      </div>
      <Link to="/" className="item">
        Trang Chủ
      </Link>

      <Link to="/tos" className="item">
        Điều khoản sử dụng
      </Link>
      <Link className="item" to="/about">
        Giới Thiệu
      </Link>
      {!loading && (
        <Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);
