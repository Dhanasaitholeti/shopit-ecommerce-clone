import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    updateData: (state) => {
      state.count += 1;
    },
  },
});

export const { updateData } = CartSlice.actions;

export default CartSlice.reducer;
