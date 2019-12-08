import React, { Fragment } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
const MobileItem = ({
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
    description
  }
}) => {
  return (
    <Fragment>
      <div class="ui feed">
        <div class="event">
          <div class="label">
            <img src={avatar} />
          </div>
          <div class="content">
            <div class="date">
              <i class="calendar alternate outline icon"></i>
              Đăng vào: <Moment format="DD/MM/YYYY">{date}</Moment>
            </div>
            <div class="summary">
              <i class="bookmark icon"></i>
              {text}
            </div>
            <div class="text">
              <i class="user circle icon"></i> Đăng bởi: <a> {name}</a>
            </div>
            <div class="text extra">
              <i class="bullhorn icon"></i>Mô tả: {description}
            </div>
            <div class="text extra">
              <i class="money bill alternate outline icon"></i>
              Giá bán: {price} VND
            </div>
            <div class="images extra">
              <img src={img} />
            </div>
            <div class="meta">
              <a class="like">
                <i aria-hidden="true" class="like icon"></i>
                {likes} Likes
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, {})(MobileItem);
