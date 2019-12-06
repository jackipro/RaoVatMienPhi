import React from "react";
import { Link } from "react-router-dom";
const DashboardAction = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <Link to="/edit-profile" class="ui positive basic button">
        <i class="user circle icon"></i>
        Chỉnh sửa thông tin
      </Link>{" "}
      <Link to="/" class="ui black basic button">
        <i class="home icon"></i>
        {/* <i class="backward icon"></i> */}
        Trang Chủ
      </Link>
    </div>
  );
};
export default DashboardAction;
