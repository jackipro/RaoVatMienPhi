import React, { Fragment } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { addLike, removeLike } from "../../actions/post";
import { Grid, Image } from "semantic-ui-react";
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
      <div style={{ margin: "45px" }}>
        <Grid>
          <Grid.Column width={4}>
            <div className="mobile_single-banner"></div>
          </Grid.Column>
          <Grid.Column width={8}>
            <h1 className="ui header">Chi tiết bài viết</h1>
            <Link to="/mobile" className="ui secondary button">
              <i className="arrow alternate circle left icon"></i>
              Trở lại
            </Link>
            <div className="ui items">
              <div className="item">
                <a className="ui tiny image" href="!#">
                  <img src={avatar} alt="/" />
                </a>
                <div className="middle aligned content">
                  <a className="header" href="!#">
                    {name}
                  </a>
                  <div className="date" style={{ margin: "10px 0px" }}>
                    <i className="calendar alternate outline icon"></i>
                    Đăng vào: <Moment format="DD/MM/YYYY">{date}</Moment>
                  </div>
                  <div
                    className="ui star rating"
                    role="radiogroup"
                    tabindex="-1"
                  >
                    <i
                      tabindex="0"
                      aria-checked="false"
                      aria-posinset="1"
                      aria-setsize="4"
                      className="active icon"
                      role="radio"
                    ></i>
                    <i
                      tabindex="0"
                      aria-checked="false"
                      aria-posinset="2"
                      aria-setsize="4"
                      className="active icon"
                      role="radio"
                    ></i>
                    <i
                      tabindex="0"
                      aria-checked="true"
                      aria-posinset="3"
                      aria-setsize="4"
                      className="active icon"
                      role="radio"
                    ></i>
                    <i
                      tabindex="0"
                      aria-checked="false"
                      aria-posinset="4"
                      aria-setsize="4"
                      className="icon"
                      role="radio"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="ui header">{text}</h1>
            <h3
              style={{ color: "red", margin: "10px 0px", fontWeight: "bold" }}
            >
              Giá bán: {price} VNĐ
            </h3>
            <div className="description">
              <p>{description}</p>
            </div>

            <div className="ui divider"></div>
            <h3 style={{ margin: "10px 0px", fontWeight: "bold" }}>
              <i className="mobile alternate icon"></i>
              Số điện thoại liên hệ:{" "}
              <a className="ui teal tag label" href="!#">
                {phone}
              </a>
            </h3>
            <div className="ui divider"></div>
            <h3 style={{ margin: "10px 0px", fontWeight: "bold" }}>
              <i className="facebook messenger icon"></i>
              Liên hệ với người này qua:{" "}
              <a
                href={social}
                className="ui circular facebook icon button"
                href="!#"
              >
                <i className="facebook icon"></i>
              </a>
            </h3>
            <div className="ui divider"></div>
            <h3 style={{ margin: "10px 0px", fontWeight: "bold" }}>
              <i className="map marker icon"></i>
              Khu vực:{" "}
              <a className="ui teal tag label" href="!#">
                {address}
              </a>
            </h3>
            <div className="ui divider"></div>
            <Image src={img} />
          </Grid.Column>
          <Grid.Column width={4}>
            <div className="banner-doc"></div>
          </Grid.Column>
        </Grid>
      </div>
    </Fragment>
  );
};

export default connect(null, { addLike, removeLike })(MobileSingleItem);
