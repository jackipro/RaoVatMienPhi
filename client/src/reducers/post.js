import { GET_POST, POST_ERROR } from "../actions/types";

const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: {}
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
