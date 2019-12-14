import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  GridColumn,
  Header,
  Segment,
  Input,
  Button
} from "semantic-ui-react";

import QuangCao from "../../img/quangcao12.png";

import QuangCao7 from "../../img/quangcao7.png";
import QuangCao8 from "../../img/quangcao8.jpg";
export default function Homepage() {
  return (
    <div>
      <div className="ui justified container">
        <div style={{ marginBottom: "20px" }}>
          <Segment clearing>
            <Header as="h1" floated="left">
              Chào mừng bạn đến với website đăng tin rao vặt miễn phí
            </Header>

            <Header as="h6" floated="right">
              <Input icon="search" placeholder="Search..." />{" "}
            </Header>
            <Header as="h4" floated="left">
              Liên hệ với chúng tôi qua:
              <div style={{ marginTop: "10px" }}>
                <Button circular color="facebook" icon="facebook" />
                <Button circular color="twitter" icon="twitter" />
                <Button circular color="linkedin" icon="linkedin" />
                <Button circular color="google plus" icon="google plus" />
              </div>
            </Header>
          </Segment>
        </div>
        <div id="slider" style={{ marginBottom: "20px" }}>
          <figure>
            <img src={QuangCao8} />
            <img src={QuangCao} />
            <img src={QuangCao7} />
          </figure>
        </div>
      </div>

      <div className="cot">
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <div className="banner-trangchu"></div>
            </Grid.Column>
            <Grid.Column width={6}>
              <h3>Điện Thoại</h3>
              <Link to="/mobile">
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
              <Link to="/mobile">
                <div className="bike-gif"></div>
              </Link>
              <h3>Tuyển Dụng</h3>
              <Link to="/mobile">
                <div className="job-gif"></div>
              </Link>
            </Grid.Column>

            <Grid.Column width={3}>
              <div className="banner-doc"></div>
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
        </Grid>
      </div>
    </div>
  );
}
