import React from "react";
import Img from "../../img/showcase.jpg";
export default function Homepage() {
  return (
    <div>
      <div class="ui two column centered">
        <div class="column ">
          <div className="banner"></div>
          <div className="homepage-title">
            <h1>Chào mừng đến với Đăng tin rao vặt miễn phí</h1>
            <p>
              Hãy kết nối và trao đổi những món đồ cũ cùng với mọi người hoặc
              bán nó với giá rẻ.
            </p>
            <h1>Khám phá các danh mục</h1>
          </div>

          <div className="danhmuc-box">
            <div className="ui card">
              <a className="image" href="#!">
                <img src={Img} alt="/" />
              </a>
              <div className="content">
                <a className="header" href="#!">
                  First item
                </a>
              </div>
            </div>
            <div className="ui card">
              <a className="image" href="#!">
                <img src={Img} alt="/" />
              </a>
              <div className="content">
                <a className="header" href="#!">
                  Steve Jobes
                </a>
              </div>
            </div>
            <div className="ui card">
              <a className="image" href="#!">
                <img src={Img} alt="/" />
              </a>
              <div className="content">
                <a className="header" href="#!">
                  Steve Jobes
                </a>
              </div>
            </div>
            <div className="ui card">
              <a className="image" href="#!">
                <img src={Img} alt="/" />
              </a>
              <div className="content">
                <a className="header" href="#!">
                  Steve Jobes
                </a>
              </div>
            </div>
            <div className="ui card">
              <a className="image" href="#!">
                <img src={Img} alt="/" />
              </a>
              <div className="content">
                <a className="header" href="#!">
                  Steve Jobes
                </a>
              </div>
            </div>
            <div className="ui card">
              <a className="image" href="#!">
                <img src={Img} alt="/" />
              </a>
              <div className="content">
                <a className="header" href="#!">
                  Steve Jobes
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-footer"></div>
        <div class="four column centered row">
          <div class="column"></div>
          <div class="column"></div>
        </div>
      </div>
    </div>
  );
}
