import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Grid, GridColumn } from "semantic-ui-react";
const AddPost = () => {
  return (
    <Fragment>
      <div className="banner-quangcao15"></div>

      <div
        className="ui justified container"
        style={{
          padding: "30px 0px",
          textAlign: "center"
        }}
      >
        <h1 class="ui header"> Chọn danh mục đăng bài</h1>
      </div>

      <div className="cot">
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <div className="banner-addmobile"></div>
            </Grid.Column>
            <Grid.Column width={6}>
              <h3>Điện Thoại</h3>
              <Link to="/add-mobile">
                <div className="mobile-gif"></div>
              </Link>

              <Grid>
                <Grid.Row>
                  <GridColumn width={8}>
                    <h3>Thời Trang</h3>
                    <Link to="/mobile">
                      <div className="fashion-gif"></div>
                    </Link>
                  </GridColumn>
                  <GridColumn width={8}>
                    <h3>Thú Cưng</h3>
                    <Link to="/mobile">
                      <div className="dog-gif"></div>
                    </Link>{" "}
                  </GridColumn>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column width={3}>
              <h3>Xe cộ</h3>
              <Link to="/add-bike">
                <div className="bike-gif"></div>
              </Link>
              <h3>Tuyển Dụng</h3>
              <Link to="/mobile">
                <div className="job-gif"></div>
              </Link>
            </Grid.Column>

            <Grid.Column width={3}>
              <div className="banner-addmobile2"></div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <div className="banner-trangchu2"></div>
            </Grid.Column>

            <Grid.Column width={5}>
              <h3>Khuyến mãi cực sốc</h3>
              <Link to="/mobile">
                <div className="banner-trangchu3"></div>
              </Link>

              <Grid>
                <Grid.Row>
                  <GridColumn width={8}>
                    <h3>Khuyến mãi cực sốc</h3>
                    <div className="banner-trangchu5"></div>
                  </GridColumn>
                  <GridColumn width={8}>
                    <h3>Sale off</h3>
                    <div className="banner-trangchu6"></div>
                  </GridColumn>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={4}>
              <h3>Các shop khác</h3>
              <div className="banner-trangchu4"></div>
              <h3>Ưu đãi</h3>
              <div className="banner-trangchu7"></div>
            </Grid.Column>

            <Grid.Column width={3}>
              <div className="banner-doc2"></div>
            </Grid.Column>
          </Grid.Row>
          <Link to="/" className="ui secondary button">
            <i className="arrow alternate circle left icon"></i>
            Trở lại
          </Link>
        </Grid>
      </div>
    </Fragment>
  );
};
export default AddPost;
