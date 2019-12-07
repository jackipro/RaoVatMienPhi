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
      <div class="event">
        <div class="label">
          <img src={avatar} />
        </div>
        <div class="content">
          <div class="date">4 ngày trước</div>
          <div class="summary">{text}</div>
          <div class="summary">Đăng bởi: {name}</div>
          <div class="text extra">Điện thoại cũ giá rẻ, mới 90%</div>
          <div class="text extra">
            <i class="money bill alternate outline icon"></i>
            Giá bán: 3000000
          </div>
          <div class="images extra">
            <img src={img} />
          </div>
          <div class="meta">
            <a class="like">
              <i aria-hidden="true" class="like icon"></i>4 Likes
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, {})(MobileItem);
