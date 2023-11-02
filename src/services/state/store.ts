import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/Cart";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
