import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";
import Phone from "../../img/phone.png";
import Bike from "../../img/bike.jpg";
import Job from "../../img/job.jpg";
import Dog from "../../img/dog.jpg";
import Service from "../../img/service.png";
import Fashion from "../../img/fashion.jpg";
import BannerDoc from "../../img/bannerdoc.jpg";
import BannerDoc2 from "../../img/bannerdoc2.jpg";
import BannerDoc3 from "../../img/bannerdoc3.gif";
const AddPost = () => {
  return (
    <Fragment>
      <h1 class="ui header">Chọn danh mục đăng bài</h1>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={BannerDoc} />
            <Image src={BannerDoc3} />
          </Grid.Column>

          <Grid.Column width={5}>
            <div className="ui card">
              <Link to="/add-mobile" className="image" href="#!">
                <img src={Phone} alt="/" />
              </Link>
              <div className="content">
                <Link to="/mobile" className="header" href="#!">
                  Điện Thoại
                </Link>
                <div class="meta">
                  <span class="date">Cập nhật ngày 25/11/2019</span>
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
          </Grid.Column>
          <Grid.Column width={5}>
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
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src={BannerDoc2} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};
export default AddPost;
