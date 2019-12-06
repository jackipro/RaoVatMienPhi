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
          <Link to="/" className="ui inverted  button">
            <i class="arrows plus icon"></i>
            Đăng bài
          </Link>
        </div>
      </div>
      <div className="item">
        <div className="ui tiny buttons">
          <Link to="/dashboard" className="ui inverted primary button">
            <i class="user circle icon"></i>
            Thông tin cá nhân
          </Link>
          <div className="or"></div>
          <Link to="/createprofile" className="ui inverted primary button">
            <i class="user circle icon"></i>
            Tạo thông tin hoặc cập nhật
          </Link>
        </div>
      </div>

      <div className="item">
        <div className="ui tiny buttons">
          <a onClick={logout} className="ui  inverted red  button">
            <i class="arrows sign-out icon"></i>
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
          <Link to="/register" className="ui inverted button">
            <i class="arrows user icon"></i>
            Đăng Ký
          </Link>
          <div className="or"></div>
          <Link to="/login" className="ui inverted yellow  button">
            <i class="arrows sign-in icon"></i>
            Đăng Nhập
          </Link>
        </div>
      </div>
    </div>
  );
  return (
    <div className="ui small inverted menu  ">
      <div className="item">
        <img src={Logo} alt="/" />
      </div>
      <Link to="/" className="item">
        Trang Chủ
      </Link>

      <Link to="/tos" className="item">
        Điều khoản sử dụng
      </Link>
      <a className="item" href="#!">
        Giới Thiệu
      </a>
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
