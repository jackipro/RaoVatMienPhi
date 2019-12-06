import React from "react";
import Img from "../../img/icon2.png";
const Footer = () => {
  return (
    <div
      class="ui inverted vertical footer segment"
      style={{ marginTop: "40px" }}
    >
      <div class="ui center aligned container">
        <div class="ui stackable inverted divided grid">
          <div class="three wide column">
            <h4 class="ui inverted header">Về Rao Vặt Miễn Phí </h4>
            <div class="ui inverted link list">
              <a href="#" class="item">
                Giới thiệu
              </a>
              <a href="#" class="item">
                Tuyển Dụng
              </a>
              <a href="#" class="item">
                Truyền Thông
              </a>
              <a href="#" class="item">
                Blog
              </a>
            </div>
          </div>
          <div class="three wide column">
            <h4 class="ui inverted header">Hỗ trợ khách hàng</h4>
            <div class="ui inverted link list">
              <a href="#" class="item">
                Trung tâm trợ giúp
              </a>
              <a href="#" class="item">
                An toàn mua bán
              </a>
              <a href="#" class="item">
                Quy định cần biết
              </a>
              <a href="#" class="item">
                Liên hệ hỗ trợ
              </a>
            </div>
          </div>
          <div class="three wide column">
            <h4 class="ui inverted header">Liên Kết Với Chúng Tôi</h4>
            <div class="ui inverted link list">
              <a href="#" class="item">
                <i class="facebook icon"></i>
                Facebook
              </a>
              <a href="#" class="item">
                <i class="google plus g icon"></i> Google +
              </a>
              <a href="#" class="item">
                <i class="instagram icon"></i>
                Instagram
              </a>
              <a href="#" class="item">
                <i class="youtube icon"></i>
                Youtube
              </a>
            </div>
          </div>
          <div class="seven wide column">
            <h4 class="ui inverted header">Rao Vặt Miễn Phí</h4>
            <p>Hãy chọn đối tác cho bạn với những món đồ giá rẻ nhất nhé !</p>
          </div>
        </div>
        <div class="ui inverted section divider"></div>
        <img src={Img} class="ui centered mini image" />
        <div class="ui horizontal inverted small divided link list">
          <a class="item" href="#">
            <i class="map marker alternate icon"></i>
            Địa Chỉ: 123 Gò Vấp Thành Phố Hồ Chí Minh
          </a>
          <a class="item" href="#">
            <i class="phone icon"></i>
            Liên hệ: 01214950632
          </a>
          <a class="item" href="#">
            <i class="user secret icon"></i>
            Chính sách và bảo mật
          </a>
          <a class="item" href="#">
            <i class="lock icon"></i>
            Điều khoản
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
