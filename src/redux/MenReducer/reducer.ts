
import { AnyAction, Dispatch, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from "axios";
import userProduct from '@/apis/userProduct';
const menSlice = createSlice({
  name: "men",
  initialState: {
    isLoading: false,
    isError: false,
    total: 0,
    women: [],
    men:[]
  },
  reducers: {
    getMenRequestPending: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getMenRequestSuccess: (state, { payload }) => {
      console.log("payload.data",payload.data);
      state.isLoading = false;
      state.isError = false;
      state.total = payload.total;
      state.men = payload.data;
    },
    getMenRequestFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    getWomenRequestSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.total = payload.total;
      state.women = payload.data;
    },
  },
});

export const {
  getMenRequestPending,
  getMenRequestSuccess,
  getMenRequestFailure,
  getWomenRequestSuccess,
} = menSlice.actions;

export const fetchMensData =(paramObj: any, dispatch: Dispatch<AnyAction>) => {
  async function  fetchmen1() {
  // dispatch(getMenRequestPending());
  try {
    const res = userProduct.getMenproduct("");
    dispatch(getMenRequestSuccess(res));
    
  } catch (error) {
    dispatch(getMenRequestFailure());
  }
};
fetchmen1();
}




// export const fetchWomensData = (paramObj) => async (dispatch) => {
//   dispatch(getMenRequestPending());
  
//   try {
//     const res = await axios.get(
//       process.env.REACT_APP_HOST + `women?_limit=12`,
//       paramObj
//     );
    
//     const obj = {
//       data: res.data,
//       total: res.headers.get("X-Total-Count"),
//     };
    
//     dispatch(getWomenRequestSuccess(obj));
    
//   } catch (error) {
//     dispatch(getMenRequestFailure());
//   }
// };



export default menSlice.reducer;

