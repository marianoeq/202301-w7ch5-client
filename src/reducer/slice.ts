import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../models/users.models";

interface State {
  userLogged: {
    token: string;
    user: UserStructure;
  } | null;
  users: UserStructure[];
}

interface LoginData {
  token: string;
  user: UserStructure;
}

const initialState: State = {
  userLogged: null,
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUsers(state, action: PayloadAction<UserStructure[]>) {
      state.users = action.payload;
    },
    loadOneUser(state, action: PayloadAction<UserStructure>) {
      state.userLogged!.user = action.payload;
    },
    register(state, action: PayloadAction<UserStructure[]>) {
      state.users = action.payload;
    },
    login(state, action: PayloadAction<LoginData>) {
      state.userLogged = {
        token: action.payload.token,
        user: action.payload.user,
      };
    },
    logout(state) {
      state.userLogged = null;
    },
  },
});

export const { loadUsers } = userSlice.actions;
export const userReducer = userSlice.reducer;
