import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";
import { getSingleBike } from "../../actions/bike";

import BikeSingleItem from "./BikeSingleItem";
const BikeDetail = ({ getSingleBike, bike: { bike, loading }, match }) => {
  useEffect(() => {
    getSingleBike(match.params.id);
  }, [getSingleBike]);
  return loading || bike === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="bike_details"></div>
      <BikeSingleItem bike={bike} />
    </Fragment>
  );
};
const mapStateToProps = state => ({
  bike: state.bike
});
export default connect(mapStateToProps, { getSingleBike })(BikeDetail);
