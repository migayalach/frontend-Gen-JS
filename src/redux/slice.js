import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "root",
  initialState: {
    users: [],
  },
  reducers: {
    // *USERS
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { getAllUsers } = Slice.actions;
export default Slice.reducer;
