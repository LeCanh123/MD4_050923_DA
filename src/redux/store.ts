import { configureStore,combineReducers } from '@reduxjs/toolkit'; 
import MenReducer from "./MenReducer/reducer"
import cartReducer from "./cartReducer/reducer"
import AuthReducer from "./authReducer/reducer"

// Kết hợp reducer
const rootReducer = combineReducers({
  MenReducer,
  cartReducer,
  AuthReducer
});


// Xuất ra store type
export type StoreType = ReturnType<typeof rootReducer>;


export const store = configureStore({
  reducer: rootReducer,
  })

