import React, { Fragment } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { addLike, removeLike } from "../../actions/post";
const MobileItem = ({
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
    description
  }
}) => {
  return (
    <Fragment>
      <div class="ui items">
        <div class="item">
          <div class="ui small image">
            <img src={img} />
          </div>

          <div class="middle aligned content">
            <div class="header">
              <h1 class="ui small header">{text}</h1>
            </div>
            <div class="text" style={{ margin: "10px 0px" }}>
              <i class="user circle icon"></i> Đăng bởi: <a> {name}</a>
            </div>
            <div class="date">
              <i class="calendar alternate outline icon"></i>
              Đăng vào: <Moment format="DD/MM/YYYY">{date}</Moment>
            </div>
            <div
              class="text"
              style={{ color: "red", margin: "10px 0px", fontWeight: "bold" }}
            >
              <i class="money bill alternate outline icon"></i> Giá bán: {price}
              VND
            </div>
            <Link to={`/mobile/${_id}`} class="ui mini primary basic button">
              Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
      <div class="ui divider"></div>
    </Fragment>
  );
};

export default connect(null, { addLike, removeLike })(MobileItem);
