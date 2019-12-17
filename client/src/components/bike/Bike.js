import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getBike } from "../../actions/bike";
import BikeItem from "./BikeItem";
import { Grid } from "semantic-ui-react";
const Bike = ({ getBike, bike: { bikes, loading } }) => {
  useEffect(() => {
    getBike();
  }, [getBike]);
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <div className="bike-banner"></div>

      <h1
        className="ui header"
        style={{
          paddingBottom: "20px",
          textAlign: "center"
        }}
      >
        Xe cộ giá rẻ 2019
      </h1>
      <div style={{ margin: " 0px 30px" }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <div style={{ margin: " 10px 20px" }}>
                <h4>Các danh mục khác</h4>
                <div className="ui vertical menu ">
                  <a className="item" href="!#">
                    Dịch vụ
                  </a>
                  <a className="item" href="!#">
                    Thú cưng
                  </a>
                  <a className="item" href="!#">
                    Việc làm
                  </a>
                  <a className="item" href="!#">
                    Thời trang
                  </a>
                  <a className="item" href="!#">
                    Xe cộ
                  </a>
                  <a className="item" href="!#"></a>
                  <div className="item">
                    <div className="ui icon input">
                      <input type="text" placeholder="Search mail..." />
                      <i aria-hidden="true" className="search icon"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="banner-doc2"></div>
            </Grid.Column>
            <Grid.Column width={10}>
              {bikes.map(bike => (
                <BikeItem key={bike._id} bike={bike} />
              ))}
            </Grid.Column>

            <Grid.Column width={3}>
              <div className="banner-doc"></div>
              <div className="banner-doc"></div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  bike: state.bike
});
export default connect(mapStateToProps, { getBike })(Bike);
