import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPost } from "../../actions/post";
import MobileItem from "./MobileItem";
const Mobile = ({ getPost, post: { posts, loading } }) => {
  useEffect(() => {
    getPost();
  }, [getPost]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="ui header">Các bài đăng mới nhất danh mục điện thoại</h1>

      <div>
        {posts.map(post => (
          <MobileItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  post: state.post
});
export default connect(mapStateToProps, { getPost })(Mobile);
