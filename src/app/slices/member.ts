import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  Member,
  MemberFormData,
  MemberScreen,
  MemberType,
} from "../../types/member";

interface MemberState {
  currentScreen: MemberScreen;
  members: Member[];
  memberForm: Member;
}

const initialState: MemberState = {
  currentScreen: "list",
  members: [],
  memberForm: {
    firstName: "",
    email: "",
    lastName: "",
    phone: "",
    role: MemberType.REGULAR,
  },
};

export const memberSlice = createSlice({
  name: "memberSlice",
  initialState,
  reducers: {
    changeScreen: (state, action: PayloadAction<MemberScreen>) => {
      state.currentScreen = action.payload;
    },
    memberFormChangeHandler: (state, action: PayloadAction<MemberFormData>) => {
      if (
        action.payload.id === "role" &&
        typeof action.payload.value !== "string"
      ) {
        state.memberForm.role = action.payload.value;
      } else if (
        action.payload.id !== "role" &&
        typeof action.payload.value === "string"
      ) {
        state.memberForm[action.payload.id] = action.payload.value;
      }
    },
    updateMembers: (state, action: PayloadAction<Member>) => {},
  },
});

export const { updateMembers, changeScreen } = memberSlice.actions;

export default memberSlice.reducer;
