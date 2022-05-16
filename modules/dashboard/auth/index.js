import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mapErrorMessage } from "./utils";
import { api } from "./api";

export const logoutRequest = createAsyncThunk(
  "logout/logoutRequest",
  async (payload) => {
    const response = await api.apiLogoutRequest(payload);
    return response.data;
  }
);



const initialState = {
  token: null,
  user: {},
  api: { loading: "idle", error: null },
};
export const slice = createSlice({
  name: "logout",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [logoutRequest.pending]: (state) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
        state.api.error = null;
      }
    },
    [logoutRequest.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.api.loading = "idle";
      }
    },
    [logoutRequest.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = mapErrorMessage(action.error);
        state.api.loading = "idle";
      }
    },

  
  },
});
