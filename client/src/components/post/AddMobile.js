import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../../actions/post";
import NumberFormat from "react-number-format";
import ReactFileReader from "react-file-reader";

const AddMobile = ({ createPost }) => {
  const [formData, setFormData] = useState({
    text: "",
    social: "",
    price: "",
    phone: "",
    address: "",
    description: "",
    img: ""
  });
  const { text, img, price, phone, address, description, social } = formData;
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    createPost(formData);
  };
  const handleFiles = files => {
    setFormData({
      img: files.base64
    });
    // setFormData({...formData, e.target.img: e.target.value})
  };

  return (
    <div>
      <div className="banner-profile"></div>
      <h1 className="ui header">Điện thoại giá rẻ </h1>
      <form onSubmit={e => onSubmit(e)} className="ui form">
        <div className="unstackable two fields">
          <div className="field">
            <label>
              <i class="file image icon"></i> Hình ảnh
            </label>
            <div className="ui input">
              <ReactFileReader
                fileTypes={["jpg", "png"]}
                base64={true}
                handleFiles={handleFiles}
              >
                <button type="button">Upload</button>
              </ReactFileReader>
              <input
                onChange={e => onChange(e)}
                value={img}
                name="img"
                handleFiles={handleFiles}
                disabled
              />
            </div>
          </div>
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
              <NumberFormat
                thousandSeparator={true}
                value={price}
                name="price"
                onChange={e => onChange(e)}
                placeholder="Giá tiền"
                prefix={"$"}
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
          <div className="field">
            <label>
              <i class="pencil alternate icon"></i> Link mạng xã hội để liên lạc
            </label>
            <div className="ui input">
              <input
                value={social}
                name="social"
                onChange={e => onChange(e)}
                type="text"
                placeholder="Link mạng xã hội để liên lạc"
              />
            </div>
          </div>
        </div>

        <button type="submit" className="ui button">
          Đăng bài
        </button>

        <Link to="/mobile" class="ui primary basic button">
          Chuyển đến trang rao vặt điện thoại
        </Link>
      </form>
    </div>
  );
};

export default connect(null, { createPost })(withRouter(AddMobile));
