import axios from "axios";
import {
  MEN_REQUEST_FAILURE,
  MEN_REQUEST_PENDING,
  MEN_REQUEST_SUCCESS,
  WOMEN_REQUEST_SUCCESS,
} from "./actionType";

export const getmens = (paramObj) => (dispatch) => {
  dispatch({ type: MEN_REQUEST_PENDING });
  
  axios
    .get(process.env.REACT_APP_HOST+
      `men?_limit=12`,
      paramObj
    )
    .then((res) => {
      let obj = {
        data: res.data,
        total: res.headers.get("X-Total-Count"),
      };
      dispatch({ type: MEN_REQUEST_SUCCESS, payload: obj });
    })
    .catch(() => {
      dispatch({ type: MEN_REQUEST_FAILURE });
    });
};

export const getwomens = (paramObj) => (dispatch) => {
  dispatch({ type: MEN_REQUEST_PENDING });
  axios
    .get(process.env.REACT_APP_HOST+
      `women?_limit=12`,
      paramObj
    )
    .then((res) => {
      let obj = {
        data: res.data,
        total: res.headers.get("X-Total-Count"),
      };
      dispatch({ type: WOMEN_REQUEST_SUCCESS, payload: obj });
    })
    .catch(() => {
      dispatch({ type: MEN_REQUEST_FAILURE });
    });
};
