import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";
import { getSinglePost } from "../../actions/post";

import MobileSingleItem from "./MobileSingleItem";
const Detail = ({ getSinglePost, post: { post, loading }, match }) => {
  useEffect(() => {
    getSinglePost(match.params.id);
  }, [getSinglePost]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="mobile_single"></div>
      <MobileSingleItem post={post} />
    </Fragment>
  );
};
const mapStateToProps = state => ({
  post: state.post
});
export default connect(mapStateToProps, { getSinglePost })(Detail);
