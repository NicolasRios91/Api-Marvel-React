import { createSlice } from "@reduxjs/toolkit";

const comicsSlice = createSlice({
  name: "comics",
  initialState: {
    data: null,
  },
  reducers: {
    setComics: (state, { payload }) => {
      state.data = payload;
    },
  },
});

const { actions, reducer } = comicsSlice;

export const { setComics } = actions;

export default reducer;
