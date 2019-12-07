import React from "react";
import { Link } from "react-router-dom";
import Phone from "../../img/phone.png";
import Bike from "../../img/bike.jpg";
import Job from "../../img/job.jpg";
import Dog from "../../img/dog.jpg";
import Service from "../../img/service.png";
import Fashion from "../../img/fashion.jpg";
const AddPost = () => {
  return (
    <div>
      <div className="ui two column centered">
        <div className="column ">
          <div className="banner-login"></div>

          <div className="homepage-title">
            <h1>Bạn muốn đăng bài theo danh mục nào ? </h1>
          </div>

          <div className="danhmuc-box">
            <div className="ui card">
              <Link to="/add-mobile" className="image" href="#!">
                <img src={Phone} alt="/" />
              </Link>
              <div className="content">
                <Link to="/add-mobile" className="header" href="#!">
                  Điện Thoại
                </Link>
                <div class="meta">
                  <span class="date">Cập nhật ngày 25/11/2019</span>
                </div>
              </div>
            </div>
            <div className="ui card">
              <a className="image" href="#!">
                <img src={Bike} alt="/" />
              </a>
              <div className="content">
                <a className="header" href="#!">
                  Xe Cộ
                </a>
                <div className="meta">
                  <span class="date">Cập nhật ngày 25/11/2019</span>
                </div>
              </div>
            </div>
            <div className="ui card">
              <a className="image" href="#!">
                <img src={Job} alt="/" />
              </a>
              <div className="content">
                <a className="header" href="#!">
                  Việc Làm
                </a>
                <div className="meta">
                  <span className="date">Cập nhật ngày 25/11/2019</span>
                </div>
              </div>
            </div>
            <div className="ui card">
              <a className="image" href="#!">
                <img src={Dog} alt="/" />
              </a>
              <div className="content">
                <a className="header" href="#!">
                  Thú Cưng
                </a>
                <div className="meta">
                  <span className="date">Cập nhật ngày 25/11/2019</span>
                </div>
              </div>
            </div>
            <div className="ui card">
              <a className="image" href="#!">
                <img src={Service} alt="/" />
              </a>
              <div className="content">
                <a className="header" href="#!">
                  Dịch Vụ
                </a>
                <div className="meta">
                  <span className="date">Cập nhật ngày 25/11/2019</span>
                </div>
              </div>
            </div>
            <div className="ui card">
              <a className="image" href="#!">
                <img src={Fashion} alt="/" />
              </a>
              <div className="content">
                <a className="header" href="#!">
                  Thời Trang
                </a>
                <div className="meta">
                  <span className="date">Cập nhật ngày 25/11/2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="four column centered row">
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  );
};
export default AddPost;
