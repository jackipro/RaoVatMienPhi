import React from "react";
import Img from "../../img/icon2.png";
const Footer = () => {
  return (
    <div
      className="ui inverted vertical footer segment"
      style={{ marginTop: "40px" }}
    >
      <div className="ui center aligned container">
        <div className="ui stackable inverted divided grid">
          <div className="three wide column">
            <h4 className="ui inverted header">Về Rao Vặt Miễn Phí </h4>
            <div className="ui inverted link list">
              <a href="!#" className="item">
                Giới thiệu
              </a>
              <a href="!#" className="item">
                Tuyển Dụng
              </a>
              <a href="!#" className="item">
                Truyền Thông
              </a>
              <a href="!#" className="item">
                Blog
              </a>
            </div>
          </div>
          <div className="three wide column">
            <h4 className="ui inverted header">Hỗ trợ khách hàng</h4>
            <div className="ui inverted link list">
              <a href="!#" className="item">
                Trung tâm trợ giúp
              </a>
              <a href="!#" className="item">
                An toàn mua bán
              </a>
              <a href="!#" className="item">
                Quy định cần biết
              </a>
              <a href="!#" className="item">
                Liên hệ hỗ trợ
              </a>
            </div>
          </div>
          <div className="three wide column">
            <h4 className="ui inverted header">Liên Kết Với Chúng Tôi</h4>
            <div className="ui inverted link list">
              <a href="!#" className="item">
                <i className="facebook icon"></i>
                Facebook
              </a>
              <a href="!#" className="item">
                <i className="google plus g icon"></i> Google +
              </a>
              <a href="!#" className="item">
                <i className="instagram icon"></i>
                Instagram
              </a>
              <a href="!#" className="item">
                <i className="youtube icon"></i>
                Youtube
              </a>
            </div>
          </div>
          <div className="seven wide column">
            <h4 className="ui inverted header">Rao Vặt Miễn Phí</h4>
            <p>Hãy chọn đối tác cho bạn với những món đồ giá rẻ nhất nhé !</p>
            <p>Bản quyền thuộc Solo Team ❤️</p>
          </div>
        </div>
        <div className="ui inverted section divider"></div>
        <img src={Img} className="ui centered mini image" />
        <div className="ui horizontal inverted small divided link list">
          <a className="item" href="!#">
            <i className="map marker alternate icon"></i>
            Địa Chỉ: 123 Gò Vấp Thành Phố Hồ Chí Minh
          </a>
          <a className="item" href="!#">
            <i className="phone icon"></i>
            Liên hệ: 01214950632
          </a>
          <a className="item" href="!#">
            <i className="user secret icon"></i>
            Chính sách và bảo mật
          </a>
          <a className="item" href="!#">
            <i className="lock icon"></i>
            Điều khoản
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
