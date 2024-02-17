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
  selectedMemberId: number;
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
  selectedMemberId: 0,
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
        typeof action.payload.value === "string"
      ) {
        state.memberForm.role = action.payload.value as MemberType;
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
    updateMember: (state, action: PayloadAction<Member>) => {
      state.members = state.members.map((curMember, index) => {
        if (index === state.selectedMemberId) {
          return action.payload;
        }
        return curMember;
      });
    },
    deleteMember: (state) => {
      state.members = state.members.filter(
        (_, index) => index !== state.selectedMemberId
      );
    },
    setEditMemberId: (state, action: PayloadAction<number>) => {
      state.selectedMemberId = action.payload;
    },
    setFormData: (state, action: PayloadAction<Member>) => {
      state.memberForm = action.payload;
    },
    resetFormData: (state) => {
      state.memberForm = initialMemberFormData;
      state.selectedMemberId = 0;
    },
  },
});

export const {
  addMember,
  changeScreen,
  memberFormChangeHandler,
  resetFormData,
  setFormData,
  updateMember,
  setEditMemberId,
  deleteMember,
} = memberSlice.actions;

export default memberSlice.reducer;
