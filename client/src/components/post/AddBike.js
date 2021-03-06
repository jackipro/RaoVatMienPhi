import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createBike } from "../../actions/bike";
import NumberFormat from "react-number-format";
import ReactFileReader from "react-file-reader";
import { Grid } from "semantic-ui-react";

const AddBike = ({ createBike }) => {
  const [formData, setFormData] = useState({
    text: "",
    brand: "",
    tinhtrang: "",
    price: "",
    phone: "",
    address: "",
    description: "",
    img: ""
  });
  const {
    text,
    img,
    price,
    phone,
    address,
    description,
    brand,
    tinhtrang
  } = formData;
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    createBike(formData);
  };
  const handleFiles = files => {
    setFormData({
      img: files.base64
    });
    // setFormData({...formData, e.target.img: e.target.value})
  };

  return (
    <div>
      <div className="banner-car"></div>
      <h1 className="ui header" style={{ textAlign: "center" }}>
        Đăng tin xe cộ{" "}
      </h1>
      <div
        style={{
          margin: "0px 50px"
        }}
      >
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <div className="banner-dangtin2"></div>
            </Grid.Column>
            <Grid.Column width={10}>
              <form onSubmit={e => onSubmit(e)} className="ui form">
                <div className="unstackable two fields">
                  <div className="field">
                    <label>
                      <i className="file image icon"></i> Hình ảnh
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
                      <i className="audio description icon"></i> Tiêu đề
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
                      <i className="location arrow icon"></i> Địa Chỉ
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
                      <i className="phone icon"></i> Số điện thoại
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
                  <div className="field">
                    <label>
                      <i className="phone icon"></i> Tình trạng xe
                    </label>
                    <div className="ui input">
                      <input
                        value={tinhtrang}
                        name="tinhtrang"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Tình trạng xe của bạn"
                      />
                    </div>
                  </div>
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>
                      <i className="dollar sign icon"></i> Giá tiền bạn muốn bán
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
                      <i className="pencil alternate icon"></i> Mô tả
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
                      <i class="car icon"></i> Hãng xe
                    </label>
                    <div className="ui input">
                      <input
                        value={brand}
                        name="brand"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Hãng xe"
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="ui button">
                  Đăng bài
                </button>

                <Link to="/bike" className="ui primary basic button">
                  Chuyển đến trang rao vặt xe cộ
                </Link>
              </form>
            </Grid.Column>

            <Grid.Column width={3}>
              <div className="banner-doc"></div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default connect(null, { createBike })(withRouter(AddBike));
