import axios from "axios";
import { setAlert } from "./alert";

import { GET_POST, POST_ERROR } from "../actions/types";

//Get post

// export const getPost = () => async dispatch => {
//   try {
//     const res = await axios.get("http://localhost:5000/api/posts/");
//   } catch (err) {
//     dispatch(setAlert("Lỗi", "warning"));
//     console.log("Lỗi không xác định");
//   }
// };
// Create post
export const createPost = (formData, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post(
      "http://localhost:5000/api/posts",
      formData,
      config
    );
    dispatch({
      type: GET_POST,
      payload: res.data
    });
    dispatch(setAlert(edit ? "Đăng thất bại " : "Đăng bài thành công"));
  } catch (err) {
    dispatch(setAlert("Lỗi không xác định ", "warning"));
    console.log(
      "Chỗ này bắt lỗi nè, không đúng định dạng hay những field yêu cầu không nhập thì từ phía server trả về message chỗ này mà chưa biết render"
    );
  }
};
