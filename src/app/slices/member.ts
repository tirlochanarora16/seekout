import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface MemberState {
  count: number;
}

const initialState = {
  count: 0,
} as MemberState;

export const memberSlice = createSlice({
  name: "memberSlice",
  initialState,
  reducers: {},
});

export default memberSlice.reducer;
