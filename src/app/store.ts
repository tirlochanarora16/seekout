import { combineReducers, configureStore } from "@reduxjs/toolkit";
import member from "./slices/member";

const rootReducer = combineReducers({ member });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
