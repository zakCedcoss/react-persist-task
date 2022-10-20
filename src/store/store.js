import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
// persist
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import session from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'cart',
  storage:session
}

const persistedCartReducer = persistReducer(persistConfig,cartReducer)

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    middleware: [thunk],
  },
});

export const persistedCartStore = persistStore(store)