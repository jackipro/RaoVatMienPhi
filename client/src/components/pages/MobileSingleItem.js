import React, { Fragment } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { addLike, removeLike } from "../../actions/post";
import { Grid, Image } from "semantic-ui-react";
import Phone from "../../img/phone.png";
import Bike from "../../img/bike.jpg";
import Job from "../../img/job.jpg";
import Dog from "../../img/dog.jpg";
import Service from "../../img/service.png";
import Fashion from "../../img/fashion.jpg";
const MobileSingleItem = ({
  addLike,
  removeLike,
  post: {
    _id,
    text,
    name,
    avatar,
    user,
    likes,
    comments,
    date,
    img,
    price,
    phone,
    address,
    description,
    social
  }
}) => {
  return (
    <Fragment>
      <Grid>
        <Grid.Column width={4}>
          <div className="mobile_single-banner"></div>
        </Grid.Column>
        <Grid.Column width={8}>
          <h1 class="ui header">Chi tiết bài viết</h1>
          <Link to="/mobile" class="ui secondary button">
            <i class="arrow alternate circle left icon"></i>
            Trở lại
          </Link>
          <div class="ui items">
            <div class="item">
              <a class="ui tiny image">
                <img src={avatar} />
              </a>
              <div class="middle aligned content">
                <a class="header">{name}</a>
                <div class="date" style={{ margin: "10px 0px" }}>
                  <i class="calendar alternate outline icon"></i>
                  Đăng vào: <Moment format="DD/MM/YYYY">{date}</Moment>
                </div>
                <div class="ui star rating" role="radiogroup" tabindex="-1">
                  <i
                    tabindex="0"
                    aria-checked="false"
                    aria-posinset="1"
                    aria-setsize="4"
                    class="active icon"
                    role="radio"
                  ></i>
                  <i
                    tabindex="0"
                    aria-checked="false"
                    aria-posinset="2"
                    aria-setsize="4"
                    class="active icon"
                    role="radio"
                  ></i>
                  <i
                    tabindex="0"
                    aria-checked="true"
                    aria-posinset="3"
                    aria-setsize="4"
                    class="active icon"
                    role="radio"
                  ></i>
                  <i
                    tabindex="0"
                    aria-checked="false"
                    aria-posinset="4"
                    aria-setsize="4"
                    class="icon"
                    role="radio"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <h1 class="ui header">{text}</h1>
          <h3 style={{ color: "red", margin: "10px 0px", fontWeight: "bold" }}>
            Giá bán: {price} VNĐ
          </h3>
          <div class="description">
            <p>{description}</p>
          </div>

          <div class="ui divider"></div>
          <h3 style={{ margin: "10px 0px", fontWeight: "bold" }}>
            <i class="mobile alternate icon"></i>
            Số điện thoại liên hệ: <a class="ui teal tag label">{phone}</a>
          </h3>
          <div class="ui divider"></div>
          <h3 style={{ margin: "10px 0px", fontWeight: "bold" }}>
            <i class="facebook messenger icon"></i>
            Liên hệ với người này qua:{" "}
            <a href={social} class="ui circular facebook icon button">
              <i class="facebook icon"></i>
            </a>
          </h3>
          <div class="ui divider"></div>
          <h3 style={{ margin: "10px 0px", fontWeight: "bold" }}>
            <i class="map marker icon"></i>
            Khu vực: <a class="ui teal tag label">{address}</a>
          </h3>
          <div class="ui divider"></div>
          <Image src={img} />
        </Grid.Column>
        <Grid.Column width={4}>
          <div className="banner-doc"></div>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default connect(null, { addLike, removeLike })(MobileSingleItem);
