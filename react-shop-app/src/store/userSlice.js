import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user", // 스테이트 이름
  initialState: { name: "kim", age: 20 }, // 스테이트 값
  reducers: {},
});

export default user;
