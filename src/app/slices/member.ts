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

const initialMemberFormData: Member = {
  firstName: "",
  email: "",
  lastName: "",
  phone: "",
  role: MemberType.REGULAR,
};

const initialState: MemberState = {
  currentScreen: "list",
  members: [],
  memberForm: initialMemberFormData,
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
    addMember: (state, action: PayloadAction<Member>) => {
      state.members.push(action.payload);
    },
    resetFormData: (state) => {
      state.memberForm = initialMemberFormData;
    },
  },
});

export const {
  addMember,
  changeScreen,
  memberFormChangeHandler,
  resetFormData,
} = memberSlice.actions;

export default memberSlice.reducer;
