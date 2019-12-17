import {
  GET_BIKE,
  BIKE_ERROR,
  UPDATE_LIKES,
  GET_SINGLEBIKE,
  DELELTE_BIKE
} from "../actions/types";

const initialState = {
  bikes: [],
  bike: null,
  loading: true,
  error: {}
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_BIKE:
      return {
        ...state,
        bikes: payload,
        loading: false
      };
    case GET_SINGLEBIKE:
      return {
        ...state,
        bike: payload,
        loading: false
      };
    case DELELTE_BIKE:
      return {
        ...state,
        bikes: state.bikes.filter(bike => bike._id !== payload),
        loading: false
      };
    case BIKE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        bikes: state.bikes.map(bike =>
          bike._id === payload.id ? { ...bike, likes: payload.likes } : bike
        ),
        loading: false
      };
    default:
      return state;
  }
}
