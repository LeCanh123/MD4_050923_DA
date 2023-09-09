
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
    men:[],
    category1:[]
  },
  reducers: {
    getMenRequestPending: (state) => {
      state.isLoading = true;
      state.isError = false;
    },

    getMenRequestSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.total = payload.total;
      state.men = payload.data;
    },
    getProductByCategorysl: (state, { payload }) => {
      // state.isLoading = false;
      // state.isError = false;
      // state.total = payload.total;
      state.men = payload;
    },
    sortByPriceSuccess: (state, { payload }) => {
      if(payload.genderType=="men"){
        if(payload.sortType=="desc"){
          state.men=state.men.sort((a:any,b:any)=>b.price-a.price)
        }else{
          state.men=state.men.sort((a:any,b:any)=>a.price-b.price)
        }
      }
    },
    getCategoryRequestSuccess: (state, { payload }) => {
      // state.isLoading = false;
      // state.isError = false;
      // state.total = payload.total;
      state.category1 = payload.men;
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
  sortByPriceSuccess,
  getProductByCategorysl,
  getMenRequestFailure,
  getWomenRequestSuccess,
  getCategoryRequestSuccess

} = menSlice.actions;

export const fetchMensData =(paramObj: any, dispatch: Dispatch<AnyAction>) => {
  async function  fetchmen1() {
  // dispatch(getMenRequestPending());
  try {
    const res = await userProduct.getMenproduct("");
    dispatch(getMenRequestSuccess(res));
    
  } catch (error) {
    dispatch(getMenRequestFailure());
  }
};
fetchmen1();
}



export const getProductByCategory =(paramObj: any, dispatch: Dispatch<AnyAction>) => {
  async function  fetchmen1() {
  // dispatch(getMenRequestPending());
  try {
    const res = await userProduct.getProductByCategory(paramObj.token,paramObj.listCategory);
    console.log(res.data.data);
    
    dispatch(getProductByCategorysl(res.data.data));
    
  } catch (error) {
    dispatch(getMenRequestFailure());
  }
};
fetchmen1();
}

export const getCategory =(paramObj: any, dispatch: Dispatch<AnyAction>) => {
  async function  getCategory1() {
  // dispatch(getMenRequestPending());
  try {
    const res = await userProduct.getCategory(paramObj.token);
    dispatch(getCategoryRequestSuccess(res.data.data));
    
  } catch (error) {
    dispatch(getMenRequestFailure());
  }
};
getCategory1();
}


export const sortbyprice =(paramObj: any, dispatch: Dispatch<AnyAction>) => {
  async function  sortbyprice1() {
  dispatch(getMenRequestPending());
  try {
    
    dispatch(sortByPriceSuccess(paramObj));
    
  } catch (error) {
    dispatch(getMenRequestFailure());
  }
};
sortbyprice1();
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

