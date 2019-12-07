import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../../actions/post";

const AddMobile = ({ createPost }) => {
  const [formData, setFormData] = useState({
    text: "",
    img: "",
    price: "",
    phone: "",
    address: "",
    description: ""
  });
  const { text, img, price, phone, address, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createPost(formData);
  };

  return (
    <div>
      <div className="banner-profile"></div>
      <h1 className="ui header">Đăng bài danh mục Điện Thoại </h1>

      <form onSubmit={e => onSubmit(e)} className="ui form">
        <div className="unstackable two fields">
          <div className="field">
            <label>
              <i class="audio description icon"></i> Tiêu đề
            </label>
            <div className="ui input">
              <input
                value={text}
                name="text"
                onChange={e => onChange(e)}
                type="text"
                placeholder="Tiêu đề bài post"
              />
            </div>
          </div>
          <div className="field">
            <label>
              <i class="file image icon"></i> Hình ảnh
            </label>
            <div className="ui input">
              <input
                value={img}
                name="img"
                onChange={e => onChange(e)}
                type="text"
                placeholder="Copy URL hình ảnh"
              />
            </div>
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <label>
              <i class="location arrow icon"></i> Địa Chỉ
            </label>
            <div className="ui input">
              <input
                value={address}
                name="address"
                onChange={e => onChange(e)}
                type="text"
                placeholder="Địa chỉ của bạn"
              />
            </div>
          </div>
          <div className="field">
            <label>
              <i class="phone icon"></i> Số điện thoại
            </label>
            <div className="ui input">
              <input
                value={phone}
                name="phone"
                onChange={e => onChange(e)}
                type="text"
                placeholder="Số điện thoại của bạn"
              />
            </div>
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <label>
              <i class="dollar sign icon"></i> Giá tiền bạn muốn bán
            </label>
            <div className="ui input">
              <input
                value={price}
                name="price"
                onChange={e => onChange(e)}
                type="text"
                placeholder="Giá tiền"
              />
            </div>
          </div>
          <div className="field">
            <label>
              <i class="pencil alternate icon"></i> Mô tả
            </label>
            <div className="ui input">
              <input
                value={description}
                name="description"
                onChange={e => onChange(e)}
                type="text"
                placeholder="Mô tả về sản phẩm của bạn"
              />
            </div>
          </div>
        </div>

        <button type="submit" className="ui button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(null, { createPost })(withRouter(AddMobile));
