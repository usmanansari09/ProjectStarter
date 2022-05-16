import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mapErrorMessage } from "./utils";
import { api } from "./api";

export const signupRequest = createAsyncThunk(
  "signup/signupRequest",
  async (payload) => {
    const response = await api.apiSignupRequest(payload);
    return response.data;
  }
);



const initialState = {
  token: null,
  user: {},
  api: { loading: "idle", error: null },
};
export const slice = createSlice({
  name: "signup",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [signupRequest.pending]: (state) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
        state.api.error = null;
        state.token = null;
      }
    },
    [signupRequest.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.user = action.payload;
        state.api.loading = "idle";
      }
    },
    [signupRequest.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = mapErrorMessage(action.error);
        state.api.loading = "idle";
      }
    },

  
  },
});
