import axios from "axios";
import { setAlert } from "./alert";

import { GET_PROFILE, PROFILE_ERROR } from "./types";
//Get current users profiles

export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:5000/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    // dispatch({
    //   type: PROFILE_ERROR,
    //   payload: { msg: err.respone.statusText, status: err.respone.status }
    // });
    dispatch(
      setAlert(
        "Chưa có thông tin cá nhân, hãy tạo thông tin cá nhân ",
        "warning"
      )
    );
  }
};
// Create or update Profile

export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post(
      "http://localhost:5000/api/profile",
      formData,
      config
    );
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? "Cập nhật thành công" : "Tạo thành công"));
    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    dispatch(setAlert("Lỗi không xác định ", "warning"));
    console.log(
      "Chỗ này bắt lỗi nè, không đúng định dạng hay những field yêu cầu không nhập thì từ phía server trả về message chỗ này mà chưa biết render"
    );
  }
};
