import { configureStore } from '@reduxjs/toolkit'; 
import MenReducer from "./MenReducer/reducer"
import cartReducer from "./cartReducer/reducer"
import AuthReducer from "./authReducer/reducer"

export const store = configureStore({
  reducer: {
    MenReducer,cartReducer,AuthReducer
  },
  })

