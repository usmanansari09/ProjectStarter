import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mapErrorMessage } from "./utils";
import { api } from "./api";

export const passwordChangeRequest = createAsyncThunk(
  "registration/passwordChange",
  async (payload) => {
    const response = await api.apiPasswordChangeRequest(payload);
    return response.data;
  }
);



const initialState = {
  token: null,
  user: {},
  api: { loading: "idle", error: null },
};
export const slice = createSlice({
  name: "passwordChange",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [passwordChangeRequest.pending]: (state) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
        state.api.error = null;
        state.token = null;
      }
    },
    [passwordChangeRequest.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.user = action.payload;
        state.api.loading = "idle";
      }
    },
    [passwordChangeRequest.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = mapErrorMessage(action.error);
        state.api.loading = "idle";
      }
    },

  
  },
});
