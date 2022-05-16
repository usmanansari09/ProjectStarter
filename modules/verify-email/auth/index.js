import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mapErrorMessage } from "./utils";
import { api } from "./api";

export const verifyEmailRequest = createAsyncThunk(
  "registration/verifyEmailRequest",
  async (payload) => {
    const response = await api.apiVerifyEmailRequest(payload);
    return response.data;
  }
);



const initialState = {
  token: null,
  user: {},
  api: { loading: "idle", error: null },
};
export const slice = createSlice({
  name: "verify",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [verifyEmailRequest.pending]: (state) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
        state.api.error = null;
        state.token = null;
      }
    },
    [verifyEmailRequest.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.user = action.payload;
        state.api.loading = "idle";
      }
    },
    [verifyEmailRequest.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = mapErrorMessage(action.error);
        state.api.loading = "idle";
      }
    },

  
  },
});
