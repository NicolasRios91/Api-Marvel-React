import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    data: null,
  },
  reducers: {
    setCharacters: (state, { payload }) => {
      state.data = payload;
    },
  },
});

const { actions, reducer } = charactersSlice;

export const { setCharacters } = actions;

export default reducer;
