import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersThunk";

const initialState = {
  tweets: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "tweets",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tweets = action.payload;
        state.error = null;
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
export default usersSlice.reducer;
