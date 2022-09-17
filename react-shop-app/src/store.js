import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user", // 스테이트 이름
  initialState: "kim", // 스테이트 값
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});
