import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducer/slice";

export const userStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
