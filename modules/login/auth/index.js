import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mapErrorMessage } from "./utils";
import { api } from "./api";

export const loginRequest = createAsyncThunk(
  "login/loginRequest",
  async (payload) => {
    const response = await api.apiLoginRequest(payload);
    return response.data;
  }
);



const initialState = {
  token: null,
  user: {},
  api: { loading: "idle", error: null },
};
export const slice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [loginRequest.pending]: (state) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
        state.api.error = null;
      }
    },
    [loginRequest.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.api.loading = "idle";
      }
    },
    [loginRequest.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = mapErrorMessage(action.error);
        state.api.loading = "idle";
      }
    },

  
  },
});
